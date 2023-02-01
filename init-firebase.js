import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-storage.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

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
initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
// gs://charles-fcm-app.appspot.com
const storage = getStorage();

// Create a storage reference from our storage service
getDownloadURL(ref(storage, "video/videoplayback.mp4"))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = "blob";
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open("GET", url);
    xhr.send();

    // Or inserted into an <img> element
    const video = document.getElementById("my-video");
    video.setAttribute("src", url);
  })
  .catch((error) => {
    // Handle any errors
  });
