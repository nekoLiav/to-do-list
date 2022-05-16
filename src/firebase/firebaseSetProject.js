/* eslint-disable no-console */
import { initializeApp } from 'firebase/app';
import { doc, setDoc, getFirestore } from 'firebase/firestore';
import firebaseConfig from './firebase-config';

export default async function firebaseSetProject(project) {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const tasks = project.tasks.map((task) => ({ ...task }));

  try {
    await setDoc(
      doc(db, 'projects', project.id.toString()),
      {
        name: project.name,
        tasks,
        id: project.id,
      },
      { merge: true }
    );
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
