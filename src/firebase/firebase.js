/* eslint-disable no-console */
import { initializeApp } from 'firebase/app';
import {
  doc,
  collection,
  setDoc,
  getDocs,
  getFirestore,
} from 'firebase/firestore';
import firebaseConfig from './firebase-config';

import { toDoList } from '../core/globals';
import populateStoredProjects from '../helpers/populateStoredProjects';

export default async function firebase() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const querySnapshot = async () => {
    // check if projects exist and push/display them
    try {
      const retrieve = await getDocs(collection(db, 'projects'));
      if (retrieve.docs.length > 0) {
        retrieve.forEach((document) => {
          toDoList.push(document.data());
        });
        populateStoredProjects();
      } else {
        // add default project
        try {
          const docRef = await setDoc(doc(db, 'projects', '69'), {
            name: 'Default Project',
            tasks: [
              {
                title: 'Default Task Title',
                dueDate: '',
                priority: 'low',
                complete: false,
                id: 420,
              },
            ],
            id: 69,
          });
          console.log('Document written with ID: ', docRef.id);
        } catch (e) {
          console.error('Error adding document: ', e);
        }
      }
    } catch (e) {
      console.log('Error retrieving documents:', e);
    }
  };
  querySnapshot();
}
