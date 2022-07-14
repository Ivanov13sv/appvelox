import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FirebaseDataService } from 'API/FirebaseDataService';
// import { UserService } from 'API/UserService';
import { getAuth } from 'firebase/auth';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { useAppSelector } from 'hooks/useAppSelector';
import { IUser } from 'types/user';
import { auth, db } from '../../firebase';

interface IUserState {
	user: IUser;
	loading: boolean;
	error: null | string;
}

const initialState: IUserState = {
	user: {
		firstName: '',
		secondName: '',
		patronymic: '',
		dOb: '',
		gender: '',
		registrationAddress: '',
		residentialAddress: '',
	} as IUser,

	loading: false,
	error: null,
};

export const currentUserRef = collection(db, 'user');

export const fetchCurrentUser = createAsyncThunk('user/fetchUser', async () => {
	try {
		if (auth.currentUser) {
			const docRef = doc(db, 'user', auth.currentUser.uid);
			const docSnap = await getDoc(docRef);
			return docSnap.data();
		}
	} catch (error) {
		console.log(error);
	}
});

const currentUserSlice = createSlice({
	initialState,
	name: 'user',
	reducers: {
		cleanUser(state){
			state.user.dOb = '';
			state.user.firstName = '';
			state.user.secondName = '';
			state.user.gender = '';
			state.user.patronymic = '';
			state.user.registrationAddress = '';
			state.user.residentialAddress = '';
		}
	},
	extraReducers(builder) {
		builder.addCase(fetchCurrentUser.pending, state => {
			state.loading = true;
		});
		builder.addCase(fetchCurrentUser.fulfilled, (state: IUserState, action) => {
			state.loading = false;
			state.user = {...action.payload} as IUser;
		});
		
	},
});

export const currentUserActions = currentUserSlice.actions;

export default currentUserSlice.reducer;
