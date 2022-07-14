import { getDocs } from 'firebase/firestore';

export class AppointmentsService {
	static async fetchAppointments(ref: any) {
		const response = await getDocs(ref);
		return response.docs;
	}
}
