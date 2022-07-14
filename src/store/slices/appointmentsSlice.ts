import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getDatabase, onValue, ref } from 'firebase/database';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { IAppointment } from 'types/appointment';
import { auth, db } from '../../firebase';

interface IAppointments {
	appointments: IAppointment[];
	loading: boolean;
	error: null | string;
}

export const fetchAppointments = createAsyncThunk(
	'appointments/fetchAppointments',
	async (id: string) => {
		// const q = query(collection(db, 'user'), where('userId', '==', auth.currentUser?.uid));
		// const result: IAppointment[] = [];
		// const querySnapshot = await getDocs(q);
		// querySnapshot.forEach(doc => {
		// 	result.push({ ...doc.data(), id: doc.id } as IAppointment);
		// });
		// return result;

		try {
		} catch (error) {}

		const docRef = doc(db, 'user', id);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists() && id) {
			const response = docSnap.data();
			const days = response.appointments.map((item: any) => item);
			return days;
		} else {
			console.log('No such document!');
		}
	}
);

const initialState: IAppointments = {
	appointments: [],
	loading: false,
	error: null,
};

const appointmentsSlice = createSlice({
	name: 'appointments',
	initialState,
	reducers: {
		addNewAppointment(state, action) {
			state.appointments.push(action.payload);
		},
		removeAppointment(state, action){
			const filtredArr = state.appointments.filter(item => item.id !== action.payload);
			state.appointments = filtredArr;
		}
	},
	extraReducers(builder) {
		builder.addCase(fetchAppointments.pending, state => {
			state.loading = true;
			state.error = null;
		});
		builder.addCase(fetchAppointments.fulfilled, (state: IAppointments, action) => {
			state.loading = false;
			state.appointments = action.payload;
		});
		builder.addCase(fetchAppointments.rejected, (state, action) => {
			state.loading = false;
		});
	},
});

export const appointmentsActions = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
