import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-storage.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

import { app } from "../config/firebaseConfig.js";

const auth = getAuth(app);
const user = auth.currentUser;

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export function readFirebaseStorage() {
  if (auth.currentUser.uid) {
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
        video?.setAttribute("src", url);
      })
      .catch((error) => {
        // Handle any errors
      });
  }
}
