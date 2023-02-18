import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";

import { createFirestoreData, readFirestoreData, updateFirestoreData, deleteFirestoreData } from "../module/CRUD.js";
import { filterFirestoreData } from "../module/filter.js";
import { googleSignInFunc, googleSignOutFunc } from "../module/googleAuth.js";
import { readFirebaseStorage } from "../module/storage.js";

// 觸發登入按鈕
document.querySelector("#google-sign-in")?.addEventListener("click", function () {
  googleSignInFunc();
});

// 觸發登出按鈕
document.querySelector("#google-sign-out")?.addEventListener("click", function () {
  googleSignOutFunc();
});

// 新增資料到 Firestore 中
// createFirestoreData();

// 從 Firestorm 中讀取資料
// readFirestoreData();

// 更新 Firestore 的資料
// updateFirestoreData();

// 在 Firestore 中刪除資料
// deleteFirestoreData();

// 從 Firestorm 中讀取資料前做過濾條件
// filterFirestoreData();
