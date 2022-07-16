import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IDoctor } from 'types/doctors';
import { ref, onValue, getDatabase } from 'firebase/database';
import { collection, FirestoreError, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase';

interface IDoctorsState {
	doctors: IDoctor[];
	loading: boolean;
	error: string;
}

const initialState: IDoctorsState = {
	doctors: [],
	loading: false,
	error: '',
};

export const fetchDoctors = createAsyncThunk(
	'doctors/fetchDoctors',
	async (_, { rejectWithValue }) => {
		try {
			const q = query(collection(db, 'doctors'));
			const result: IDoctor[] = [];
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach(doc => {
				result.push({ ...doc.data(), id: doc.id } as IDoctor);
			});
			return result;
		} catch (e) {
			return 'Произошла ошибка при загрузке врачей';
		}
	}
);

const doctorsSlice = createSlice({
	name: 'doctors',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchDoctors.pending, state => {
			state.loading = true;
		});
		builder.addCase(fetchDoctors.fulfilled, (state: IDoctorsState, action) => {
			state.doctors = action.payload as IDoctor[];
			state.loading = false;
		});
		builder.addCase(fetchDoctors.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload as string;
		});
	},
});

export const doctorsActions = doctorsSlice.actions;

export default doctorsSlice.reducer;
