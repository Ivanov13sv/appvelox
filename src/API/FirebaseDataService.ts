import { db } from '../firebase';
import { doc, DocumentReference, getDocs, updateDoc } from 'firebase/firestore';

export class FirebaseDataService {
	static async fetchAppointments(ref: any) {
		const response = await getDocs(ref);
		return response.docs;
	}

	static async removeAppointment(
		array: any[],
		removeItemId: string,
		userRef: DocumentReference,
		doctorRef: DocumentReference
	) {
		const filtredArray = array.filter(item => item.id !== removeItemId);

		await updateDoc(userRef, {
			appointments: filtredArray,
		});
		await updateDoc(doctorRef, {
			appointments: filtredArray,
		});
	}
	// static async removeAppointment(
	// 	array: any[],
	// 	removeItemId: string,
	// 	userIdRef: string,
	// 	doctorIdRef?: string
	// ) {
	// 	const filtredArray = array.filter(item => item.id !== removeItemId);

	// 	const userRef = doc(db, 'user', userIdRef);
	// 	await updateDoc(userRef, {
	// 		appointments: filtredArray,
	// 	});
	// 	if (doctorIdRef) {
	// 		const doctorRef = doc(db, 'doctors', doctorIdRef);

	// 		await updateDoc(doctorRef, {
	// 			appointments: filtredArray,
	// 		});
	// 	}
	// }
}
