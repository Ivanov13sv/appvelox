import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore } from '@firebase/firestore';
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
} from '@firebase/storage';
import { notificationActions } from 'store/slices/notificationSlice';
import {
    getAuth,
    onAuthStateChanged,
    updatePassword,
    updateProfile,
    User,
    EmailAuthProvider,
    reauthenticateWithPopup,
    reauthenticateWithCredential,
    AuthCredential,
    updateEmail,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { IUser } from 'types/user';
import { INotificationType } from 'types/notification';
import { useDispatch } from 'react-redux';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage();
export const auth = getAuth();

export const useAuth = () => {
    const [currentUser, setCurrentUser] = useState<null | User>(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            }
        });
        return unsub;
    }, []);
    return currentUser;
};

// Storage
export const upload = async (file: any, currentUser: any) => {
    const fileRef = ref(storage, `${currentUser}${Date.now()}`);
    await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);
    await updateProfile(currentUser, { photoURL: photoURL });
    return photoURL;
};

export const setNewPassword = async (
    newPassword: any,
    currentPasswod: any,
    currentUser: any
) => {
    return reAuth(currentPasswod, currentUser, currentUser.email).then(() => {
        updatePassword(currentUser, newPassword);
    });
};


export const reAuth = (
    currentPasswod: string,
    currentUser: any,
    userEmail: string
) => {
    const cred = EmailAuthProvider.credential(userEmail, currentPasswod);
    return reauthenticateWithCredential(currentUser, cred);
};

export const fetchReservedDates = async (selectedDoctor: any) => {
    const docRef = doc(db, 'doctors', selectedDoctor.id);
    const docSnap = await getDoc(docRef);
    try {
        if (docSnap.exists()) {
            const response = docSnap.data();
            const days = response.appointments.map((item: any) => item.date);
            return days;
        }
    } catch (error) {}
};
