import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import {
    auth, db
} from "../utils/firebase";

import {
    doc,
    setDoc,
    collection,
    getDocs,
    where,
    addDoc,
    query
} from "firebase/firestore";



export const login = ({
    email,
    password
}) => signInWithEmailAndPassword(auth, email, password)
export const signUp = ({
    email,
    password,
    nom,
    logo,
}) => createUserWithEmailAndPassword(auth, email, password, ).then((userCredential) => addDoc(collection(db, "boutiques"), {
    nom,
    logo,
    userUid: userCredential.user.uid
}))

export const getBoutique = async (userUid) => {
    const q = query(collection(db, "boutiques"), where("userUid", "==", userUid));
    const querySnapshot = await getDocs(q);
    const boutiques = querySnapshot.docs.map((doc) => doc.data());
    return boutiques;
}


