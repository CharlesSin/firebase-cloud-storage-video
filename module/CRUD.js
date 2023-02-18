import { collection, doc, setDoc, getDoc, getDocs, getFirestore, deleteDoc, updateDoc, query, where } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

import { app } from "../config/firebaseConfig.js";

const firestoreDB = getFirestore(app);

// Create Data
export async function createFirestoreData() {
  const citiesRef = collection(firestoreDB, "cities");

  await setDoc(doc(citiesRef, "SF"), {
    name: "San Francisco",
    state: "CA",
    country: "USA",
    capital: false,
    population: 860000,
    regions: ["west_coast", "norcal"],
    timestamp: new Date().getTime(),
    datetime: new Date(),
  });
  await setDoc(doc(citiesRef, "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA",
    capital: false,
    population: 3900000,
    regions: ["west_coast", "socal"],
    timestamp: new Date().getTime(),
    datetime: new Date(),
  });
  await setDoc(doc(citiesRef, "DC"), {
    name: "Washington, D.C.",
    state: null,
    country: "USA",
    capital: true,
    population: 680000,
    regions: ["east_coast"],
    timestamp: new Date().getTime(),
    datetime: new Date(),
  });
  await setDoc(doc(citiesRef, "TOK"), {
    name: "Tokyo",
    state: null,
    country: "Japan",
    capital: true,
    population: 9000000,
    regions: ["kanto", "honshu"],
    timestamp: new Date().getTime(),
    datetime: new Date(),
  });
  await setDoc(doc(citiesRef, "BJ"), {
    name: "Beijing",
    state: null,
    country: "China",
    capital: true,
    population: 21500000,
    regions: ["jingjinji", "hebei"],
    timestamp: new Date().getTime(),
    datetime: new Date(),
  });
}

// Read Data
export async function readFirestoreData() {
  const docRef = doc(firestoreDB, "cities", "SF");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

// Update Data
export async function updateFirestoreData() {
  const washingtonRef = doc(firestoreDB, "cities", "DC");
  await updateDoc(washingtonRef, {
    timestamp: new Date().getTime(),
    datetime: new Date(),
  });
}

// Delete Data
export async function deleteFirestoreData() {
  await deleteDoc(doc(firestoreDB, "cities", "DC"));
}

// Filter data
export async function filterFirestoreData() {
  console.log("filterFirestoreData");
  const citiesRef = collection(firestoreDB, "cities");
  const qCondition = query(citiesRef, where("state", "==", "CA"));

  const querySnapshot = await getDocs(qCondition);

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    console.log(`Document id is: ${doc.id}`);
    console.log(`Document data is: ${JSON.stringify(doc.data())}`);
  });
}
