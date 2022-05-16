/* eslint-disable no-console */
import { doc, deleteDoc, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase-config';

export default async function firebaseDeleteProject(projectId) {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  try {
    await deleteDoc(doc(db, 'projects', projectId.toString()));
  } catch (e) {
    console.error('Error deleting document: ', e);
  }
}
