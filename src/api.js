import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where
} from "firebase/firestore/lite"

const firebaseConfig = {
    apiKey: "AIzaSyBWou1Wtgu_E0Ol69tRlBhczmvT0wtwE7U",
    authDomain: "vanlife-14234.firebaseapp.com",
    projectId: "vanlife-14234",
    storageBucket: "vanlife-14234.appspot.com",
    messagingSenderId: "31769310273",
    appId: "1:31769310273:web:b0f253915b1570e0be42c0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const auth = getAuth(app);
export default app

// Refactoring the fetching functions below
const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef)
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}