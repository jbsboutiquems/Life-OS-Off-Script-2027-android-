import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

function createCRC32Table() {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c >>> 0;
  }
  return table;
}

const crcTable = createCRC32Table();

function crc32(buf) {
  let c = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    c = crcTable[(c ^ buf[i]) & 0xFF] ^ (c >>> 8);
  }
  return (c ^ 0xFFFFFFFF) >>> 0;
}

function makeChunk(type, data) {
  const len = data.length;
  const buf = Buffer.alloc(4 + 4 + len + 4);
  buf.writeUInt32BE(len, 0);
  buf.write(type, 4, 4, 'ascii');
  data.copy(buf, 8);
  const crcData = Buffer.alloc(4 + len);
  crcData.write(type, 0, 4, 'ascii');
  data.copy(crcData, 4);
  const crcVal = crc32(crcData);
  buf.writeUInt32BE(crcVal, 8 + len);
  return buf;
}

function generatePng(width, height, isMaskable = false) {
  const rowSize = 1 + width * 4;
  const raw = Buffer.alloc(height * rowSize);

  const cx = width / 2;
  const cy = height / 2;
  const radius = width * (isMaskable ? 0.35 : 0.42);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    raw[rowOffset] = 0; // Filter None

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Deep dark navy / slate gradient background:
      const t = (x + y) / (width + height);
      let r = Math.round(15 + t * 15);
      let g = Math.round(23 + t * 5);
      let b = Math.round(42 + t * 30);
      let a = 255;

      // Circle border
      if (dist < radius + 3 && dist > radius - 3) {
        r = 244; g = 63; b = 94; // rose-500
      }

      // Star of chaos / spark points
      const angle = Math.atan2(dy, dx);
      // 8-fold star shape:
      const starR = radius * (0.35 + 0.35 * Math.pow(Math.abs(Math.cos(angle * 4)), 3));
      if (dist < starR) {
        // Flame gradient: rose to amber
        const flameT = dist / starR;
        r = Math.round(244 * (1 - flameT) + 251 * flameT);
        g = Math.round(63 * (1 - flameT) + 146 * flameT);
        b = Math.round(94 * (1 - flameT) + 60 * flameT);
      }

      // Center bright core
      if (dist < radius * 0.12) {
        r = 255; g = 255; b = 255;
      }

      // Outer rounded rect border if not maskable
      if (!isMaskable) {
        const cornerR = width * 0.2;
        const inX = Math.max(cornerR, Math.min(width - cornerR, x));
        const inY = Math.max(cornerR, Math.min(height - cornerR, y));
        const cornerDist = Math.sqrt((x - inX) ** 2 + (y - inY) ** 2);
        if (cornerDist > cornerR) {
          a = 0;
        }
      }

      raw[pxOffset] = r;
      raw[pxOffset + 1] = g;
      raw[pxOffset + 2] = b;
      raw[pxOffset + 3] = a;
    }
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // Bit depth
  ihdr[9] = 6; // Color type RGBA
  ihdr[10] = 0; // Compression
  ihdr[11] = 0; // Filter
  ihdr[12] = 0; // Interlace

  const compressed = zlib.deflateSync(raw, { level: 9 });

  const sig = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([sig, ihdrChunk, idatChunk, iendChunk]);
}

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'pwa-192x192.png'), generatePng(192, 192, false));
fs.writeFileSync(path.join(publicDir, 'pwa-512x512.png'), generatePng(512, 512, false));
fs.writeFileSync(path.join(publicDir, 'pwa-maskable-512x512.png'), generatePng(512, 512, true));
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), generatePng(180, 180, false));
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), generatePng(48, 48, false));

console.log('Successfully generated PWA and Android PNG icon assets in /public.');
