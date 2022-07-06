import admin from 'firebase-admin';
import { Firestore, getFirestore } from 'firebase-admin/firestore'

const serviceAccount = require('./keys/pets-4958a-firebase-adminsdk-xzam3-12bc3edeb8.json');

export let db: Firestore;

export const initDB = () => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  db = getFirestore();
}
