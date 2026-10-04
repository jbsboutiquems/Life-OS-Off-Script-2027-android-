/**
 * Front-matter persistence, local to this module.
 *
 * Mirrors the per-user namespacing convention from src/services/api.ts
 * (`lifeos:<userId>:<key>`) so front-matter entries never leak one
 * account's data into another's on a shared browser. Profile-bound fields
 * (word of the year, core values, permission commitment) are NOT stored
 * here — they flow through onSaveProfile → api.updateUser instead.
 */

const PREFIX = 'frontmatter';
const ENC_VERSION = 1;
const ENC_ALGO = 'AES-GCM';
const KEY_DERIVE_ITERS = 100000;

type EncryptedPayload = {
  v: number;
  alg: 'AES-GCM';
  iv: string;
  salt: string;
  data: string;
};

function ns(userId: string, key: string): string {
  return `lifeos:${userId || 'anon'}:${PREFIX}:${key}`;
}

function toB64(bytes: Uint8Array): string {
  let binary = '';
  for (let i = 0; i < bytes.length; i += 1) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

function fromB64(b64: string): Uint8Array {
  const binary = atob(b64);
  const out = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) out[i] = binary.charCodeAt(i);
  return out;
}

function isEncryptedPayload(value: unknown): value is EncryptedPayload {
  if (!value || typeof value !== 'object') return false;
  const v = value as Partial<EncryptedPayload>;
  return v.v === ENC_VERSION && v.alg === ENC_ALGO && !!v.iv && !!v.salt && !!v.data;
}

async function deriveKey(userId: string, salt: Uint8Array): Promise<CryptoKey> {
  const seed = `${window.location.origin}:${PREFIX}:${userId || 'anon'}`;
  const material = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(seed),
    { name: 'PBKDF2' },
    false,
    ['deriveKey']
  );
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: KEY_DERIVE_ITERS, hash: 'SHA-256' },
    material,
    { name: ENC_ALGO, length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

async function encryptForStorage(userId: string, value: unknown): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(userId, salt);
  const plaintext = new TextEncoder().encode(JSON.stringify(value));
  const ciphertext = await crypto.subtle.encrypt({ name: ENC_ALGO, iv }, key, plaintext);
  const payload: EncryptedPayload = {
    v: ENC_VERSION,
    alg: ENC_ALGO,
    iv: toB64(iv),
    salt: toB64(salt),
    data: toB64(new Uint8Array(ciphertext))
  };
  return JSON.stringify(payload);
}

async function decryptFromStorage<T>(userId: string, payload: EncryptedPayload): Promise<T> {
  const iv = fromB64(payload.iv);
  const salt = fromB64(payload.salt);
  const data = fromB64(payload.data);
  const key = await deriveKey(userId, salt);
  const plaintext = await crypto.subtle.decrypt({ name: ENC_ALGO, iv }, key, data);
  return JSON.parse(new TextDecoder().decode(plaintext)) as T;
}

export const FM_KEYS = {
  wordReflections: 'word_reflections',
  visionDump: 'vision_dump',
  lifeAudit: 'life_audit',
  permissionSlip: 'permission_slip',
  contacts: 'contacts'
} as const;

export async function loadFrontMatter<T>(userId: string, key: string): Promise<T | null> {
  try {
    const raw = localStorage.getItem(ns(userId, key));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as unknown;
    if (isEncryptedPayload(parsed)) {
      return await decryptFromStorage<T>(userId, parsed);
    }
    return parsed as T;
  } catch {
    return null;
  }
}

export async function saveFrontMatter(userId: string, key: string, value: unknown): Promise<void> {
  try {
    const encrypted = await encryptForStorage(userId, value);
    localStorage.setItem(ns(userId, key), encrypted);
  } catch {
    // ignore — same fail-soft convention as api.ts
  }
}
