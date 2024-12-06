// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDwKE0a3XYv0yB35SIq8qeUkm_MLheyh0w",
    authDomain: "portfoliov1emmanuelruiz.firebaseapp.com",
    databaseURL: "https://portfoliov1emmanuelruiz-default-rtdb.firebaseio.com",
    projectId: "portfoliov1emmanuelruiz",
    storageBucket: "portfoliov1emmanuelruiz.firebasestorage.app",
    messagingSenderId: "1082608632316",
    appId: "1:1082608632316:web:33bba38f6a0b7ce7d33279"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
