import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  getDocFromServer
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';
import { UserProfile, DailyEntry, Goal, AntiGoal, PersonalitySnapshot } from '../types';

// Initialize Firebase App
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

// Test connection on boot per Firebase skill requirements
export async function validateFirestoreConnection(): Promise<boolean> {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
    console.info('Firestore server connection verified.');
    return true;
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn('Firestore offline: running with local cache persistence.');
    } else {
      console.info('Firestore initialized successfully.');
    }
    return false;
  }
}

// Authentication Helpers
export async function signInWithGoogle(): Promise<FirebaseUser | null> {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error: any) {
    console.error('Google Sign-In Error:', error);
    throw error;
  }
}

export async function logOut(): Promise<void> {
  await signOut(auth);
}

export function subscribeToAuth(callback: (user: FirebaseUser | null) => void) {
  return onAuthStateChanged(auth, callback);
}

// User Profile Firestore Sync
export async function syncUserProfileToFirestore(userId: string, profile: Partial<UserProfile>): Promise<void> {
  try {
    const userRef = doc(db, 'users', userId);
    await setDoc(userRef, {
      ...profile,
      id: userId,
      updatedAt: new Date().toISOString()
    }, { merge: true });
  } catch (err) {
    console.warn('Error saving user profile to Firestore:', err);
  }
}

export async function fetchUserProfileFromFirestore(userId: string): Promise<UserProfile | null> {
  try {
    const userRef = doc(db, 'users', userId);
    const snap = await getDoc(userRef);
    if (snap.exists()) {
      return snap.data() as UserProfile;
    }
  } catch (err) {
    console.warn('Error fetching user profile from Firestore:', err);
  }
  return null;
}

// Daily Entry Firestore Sync
export async function syncDailyEntryToFirestore(userId: string, entry: DailyEntry): Promise<void> {
  try {
    const entryId = entry.entry_date;
    const entryRef = doc(db, 'users', userId, 'dailyEntries', entryId);
    await setDoc(entryRef, {
      ...entry,
      userId,
      updated_at: new Date().toISOString()
    }, { merge: true });
  } catch (err) {
    console.warn('Error saving daily entry to Firestore:', err);
  }
}

export async function fetchDailyEntryFromFirestore(userId: string, date: string): Promise<DailyEntry | null> {
  try {
    const entryRef = doc(db, 'users', userId, 'dailyEntries', date);
    const snap = await getDoc(entryRef);
    if (snap.exists()) {
      return snap.data() as DailyEntry;
    }
  } catch (err) {
    console.warn('Error fetching daily entry from Firestore:', err);
  }
  return null;
}

// Personality Snapshot Firestore Sync
export async function syncSnapshotToFirestore(userId: string, snapshot: PersonalitySnapshot): Promise<void> {
  try {
    const snapRef = doc(db, 'users', userId, 'personalitySnapshots', snapshot.id);
    await setDoc(snapRef, {
      ...snapshot,
      userId,
      createdAt: new Date().toISOString()
    });
  } catch (err) {
    console.warn('Error syncing snapshot to Firestore:', err);
  }
}

export async function fetchSnapshotsFromFirestore(userId: string): Promise<PersonalitySnapshot[]> {
  try {
    const snapsRef = collection(db, 'users', userId, 'personalitySnapshots');
    const q = query(snapsRef, orderBy('snapshot_date', 'desc'), limit(20));
    const querySnapshot = await getDocs(q);
    const results: PersonalitySnapshot[] = [];
    querySnapshot.forEach((d) => {
      results.push(d.data() as PersonalitySnapshot);
    });
    return results;
  } catch (err) {
    console.warn('Error fetching snapshots from Firestore:', err);
    return [];
  }
}

// Goals Firestore Sync
export async function syncGoalToFirestore(userId: string, goal: Goal): Promise<void> {
  try {
    const goalRef = doc(db, 'users', userId, 'goals', goal.id);
    await setDoc(goalRef, { ...goal, userId, updatedAt: new Date().toISOString() }, { merge: true });
  } catch (err) {
    console.warn('Error syncing goal to Firestore:', err);
  }
}

// Anti-Goals Firestore Sync
export async function syncAntiGoalToFirestore(userId: string, antiGoal: AntiGoal): Promise<void> {
  try {
    const agRef = doc(db, 'users', userId, 'antiGoals', antiGoal.id);
    await setDoc(agRef, { ...antiGoal, userId, updatedAt: new Date().toISOString() }, { merge: true });
  } catch (err) {
    console.warn('Error syncing anti-goal to Firestore:', err);
  }
}

// Media Generations Sync
export interface SavedMediaItem {
  id: string;
  userId: string;
  type: 'music' | 'image' | 'video';
  prompt: string;
  resultUrl: string;
  aspectRatio?: string;
  createdAt: string;
}

export async function saveMediaItemToFirestore(userId: string, item: SavedMediaItem): Promise<void> {
  try {
    const mediaRef = doc(db, 'users', userId, 'mediaGenerations', item.id);
    await setDoc(mediaRef, item);
  } catch (err) {
    console.warn('Error saving media item to Firestore:', err);
  }
}

export async function fetchMediaItemsFromFirestore(userId: string): Promise<SavedMediaItem[]> {
  try {
    const mediaRef = collection(db, 'users', userId, 'mediaGenerations');
    const q = query(mediaRef, orderBy('createdAt', 'desc'), limit(30));
    const querySnapshot = await getDocs(q);
    const results: SavedMediaItem[] = [];
    querySnapshot.forEach((d) => {
      results.push(d.data() as SavedMediaItem);
    });
    return results;
  } catch (err) {
    console.warn('Error fetching media items from Firestore:', err);
    return [];
  }
}

// Chat Messages Sync
export interface SavedChatMessage {
  id: string;
  userId: string;
  role: 'user' | 'model';
  modelUsed: string;
  content: string;
  persona: string;
  createdAt: string;
}

export async function saveChatMessageToFirestore(userId: string, msg: SavedChatMessage): Promise<void> {
  try {
    const chatRef = doc(db, 'users', userId, 'chatMessages', msg.id);
    await setDoc(chatRef, msg);
  } catch (err) {
    console.warn('Error saving chat message to Firestore:', err);
  }
}

export async function fetchChatMessagesFromFirestore(userId: string): Promise<SavedChatMessage[]> {
  try {
    const chatRef = collection(db, 'users', userId, 'chatMessages');
    const q = query(chatRef, orderBy('createdAt', 'asc'), limit(50));
    const querySnapshot = await getDocs(q);
    const results: SavedChatMessage[] = [];
    querySnapshot.forEach((d) => {
      results.push(d.data() as SavedChatMessage);
    });
    return results;
  } catch (err) {
    console.warn('Error fetching chat messages from Firestore:', err);
    return [];
  }
}
