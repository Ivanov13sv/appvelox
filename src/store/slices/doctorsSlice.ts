import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IDoctor } from 'types/doctors';
import { ref, onValue, getDatabase } from 'firebase/database';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase';

interface IDoctorsState {
	doctors: IDoctor[];
}

const initialState: IDoctorsState = {
	doctors: [],
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
		} catch (err) {
			let error: any = err;
			return rejectWithValue(error.message);
		}
	}
);

const doctorsSlice = createSlice({
	name: 'doctors',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchDoctors.pending, state => {});
		builder.addCase(fetchDoctors.fulfilled, (state, action) => {
			state.doctors = action.payload;
		});
	},
});

export const doctorsActions = doctorsSlice.actions;

export default doctorsSlice.reducer;
