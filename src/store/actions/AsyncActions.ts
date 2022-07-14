import { fetchAppointments } from 'store/slices/appointmentsSlice';
import { fetchCurrentUser } from 'store/slices/currentUserSlice';
import { fetchRepresentative } from 'store/slices/representativeSlice';
import { fetchDoctors } from 'store/slices/doctorsSlice';

export const asyncActions = {
	fetchAppointments,
	fetchCurrentUser,
	fetchRepresentative,
    fetchDoctors
};
