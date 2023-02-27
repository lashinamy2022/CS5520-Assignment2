import {
  collection,
  doc,
  addDoc,
  query,
  where,
  onSnapshot,
  updateDoc,
  deleteDoc,
  serverTimestamp
} from "firebase/firestore";
import { firestore } from "./firebase-setup";

// Add a new document with a generated id.
export async function writeToDB(entry) {
  //replace db with the firestore variable exported in firebase-setup
  try {
    const docRef = await addDoc(collection(firestore, "entries"), entry);
    console.log("Document written with ID: ", docRef.id);
  } catch (err) {
    console.log(err);
  }
}

export async function deleteDocById(deletedId) {
  try {
    await deleteDoc(doc(firestore, "entries", deletedId));
  } catch (err) {
    console.log(err);
  }
}

export async function updateDocById(updatedId, updatedData) {
  try {
    await updateDoc(doc(firestore, "entries", updatedId), {...updatedData, timestamp: serverTimestamp()});
  } catch (err) {
    console.log(err);
  }
}