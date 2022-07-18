import {  DocumentReference, getDocs, updateDoc } from 'firebase/firestore';

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
		const formatedArr = filtredArray.map(item => ({ id: item.id, date: item.date }));

		await updateDoc(userRef, {
			appointments: filtredArray,
		});
		await updateDoc(doctorRef, {
			appointments: formatedArr,
		});
	}

	static async deleteAppointment(
		userArr: any[],
		docorsArr: any[],
		userRef: DocumentReference,
		docRef: DocumentReference
	) {
		await updateDoc(userRef, {
			appointments: userArr,
		});
		await updateDoc(docRef, {
			appointments: docorsArr,
		});
	}
}
