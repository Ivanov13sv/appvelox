import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IRepresentative } from 'types/representative';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';

interface RepresentativeState {
	representative: IRepresentative;
	loading: boolean;
	error: null | string;
}

const initialState: RepresentativeState = {
	representative: {
		firstName: '',
		patronymic: '',
		phone: '',
		secondName: '',
	} as IRepresentative,
	loading: false,
	error: null,
};

export const fetchRepresentative = createAsyncThunk(
	'representative/fetchRepresentative',
	async () => {
		try {
			if (auth.currentUser) {
				const docRef = doc(db, 'representative', auth.currentUser.uid);
				const docSnap = await getDoc(docRef);
				return docSnap.data();
			}
		} catch (error) {
			console.log(error);
		}
	}
);

const representativeSlice = createSlice({
	name: 'representative',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchRepresentative.pending, state => {
			state.loading = true;
		});
		builder.addCase(fetchRepresentative.fulfilled, (state, action) => {
			state.loading = false
			// console.log('representative action', action.payload);
		});
	},
});

export default representativeSlice.reducer;
