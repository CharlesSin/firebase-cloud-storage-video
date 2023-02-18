import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-storage.js";

// Firebase Authentication
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

import { createFirestoreData, readFirestoreData, updateFirestoreData, deleteFirestoreData, filterFirestoreData } from "./module/CRUD.js";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkJttfx-ZiwdcrMDysnqdPKo6axLbBEPg",
  authDomain: "charles-fcm-app.firebaseapp.com",
  projectId: "charles-fcm-app",
  storageBucket: "charles-fcm-app.appspot.com",
  messagingSenderId: "746236918341",
  appId: "1:746236918341:web:8c82919ef9b6a3cafb012c",
  measurementId: "G-WG87YWKM7B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage();

// Auth
const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();

// Create a storage reference from our storage service
// getDownloadURL(ref(storage, "video/videoplayback.mp4"))
//   .then((url) => {
//     // `url` is the download URL for 'images/stars.jpg'

//     // This can be downloaded directly:
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = "blob";
//     xhr.onload = (event) => {
//       const blob = xhr.response;
//     };
//     xhr.open("GET", url);
//     xhr.send();

//     // Or inserted into an <img> element
//     const video = document.getElementById("my-video");
//     video?.setAttribute("src", url);
//   })
//   .catch((error) => {
//     // Handle any errors
//   });

document.querySelector("#google-sign-in")?.addEventListener("click", function () {
  googleSignInFunc();
});

document.querySelector("#google-sign-out")?.addEventListener("click", function () {
  googleSignOutFunc();
});

function googleSignInFunc() {
  signInWithPopup(auth, providerGoogle)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      /**
       * After Sign in we can get infomation from firebase
       * 1. Google provider credential
       * 2. token
       * 3. user info, google name, google profile picture.
       * i save all info to local storage.
       */
      localStorage.setItem("googleCredential", JSON.stringify(credential));
      localStorage.setItem("googleToken", token);
      localStorage.setItem("googleUser", JSON.stringify(user));
      console.log(credential);
      console.log(token);
      console.log(user);
      window.location.href = "./home.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}

function googleSignOutFunc() {
  console.log("googleSignOutFunc");
  signOut(auth)
    .then(() => {
      // removeItem
      localStorage.removeItem("googleCredential");
      localStorage.removeItem("googleToken");
      localStorage.removeItem("googleUser");
      window.location.href = "./index.html";
    })
    .catch((error) => {
      // An error happened.
    });
}

// createFirestoreData();
// readFirestoreData();
// updateFirestoreData();
// deleteFirestoreData();
filterFirestoreData();
