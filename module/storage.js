import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-storage.js";

import { app } from "../config/firebaseConfig.js";

export function readFirebaseStorage() {
  // Initialize Cloud Storage and get a reference to the service
  const storage = getStorage(app);

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
      const video = document.querySelectorAll(".video");
      video.forEach((element) => {
        element?.setAttribute("src", url);
      });
    })
    .catch((err) => {
      // Handle any errors
      console.error({ err });
    });
}
