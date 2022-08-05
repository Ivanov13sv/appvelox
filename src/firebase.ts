import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from '@firebase/storage';
import { getAuth, onAuthStateChanged, updateProfile, User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { IUser } from 'types/user';

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
		const unsub = onAuthStateChanged(auth, user => {
			if (user) {
				setCurrentUser(user);
			}
		});
		return unsub;
	}, []);
	return currentUser;
};

// Storage
export const upload = async (
	file: any,
	currentUser: any,
	setLoading: (status: boolean) => void
) => {
	console.log(typeof file)
	const fileRef = ref(storage, `${currentUser}${Date.now()}`);
	setLoading(true);
	await uploadBytes(fileRef, file);
	const photoURL = await getDownloadURL(fileRef);
	await updateProfile(currentUser, { photoURL: photoURL });
	setLoading(false);
	return photoURL;
};
