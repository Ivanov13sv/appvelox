import { createSlice } from '@reduxjs/toolkit';
import { IRepresentative } from 'types/representative';

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

const representativeSlice = createSlice({
	name: 'representative',
	initialState,
	reducers: {},
	extraReducers(builder) {

	},
});

export default representativeSlice.reducer;
