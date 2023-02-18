import { collection, getDocs, getFirestore, query, where } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

import { app } from "../config/firebaseConfig.js";

const firestoreDB = getFirestore(app);

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
