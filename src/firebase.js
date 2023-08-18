import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD73IgRRjPCOAyA85fIVt1zTROfXhuoBqk",
    authDomain: "auth-development-bbec7.firebaseapp.com",
    projectId: "auth-development-bbec7",
    storageBucket: "auth-development-bbec7.appspot.com",
    messagingSenderId: "207219692584",
    appId: "1:207219692584:web:cd43d8ff37b0af3f94111d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app