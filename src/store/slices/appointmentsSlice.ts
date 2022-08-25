import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { asyncActions } from 'store/actions/asyncActionCreators';
import { IAppointment } from 'types/appointment';

interface IAppointmentsState {
    appointments: IAppointment[];
    loading: boolean;
    error: null | string;
}

const initialState: IAppointmentsState = {
    appointments: [],
    loading: false,
    error: null,
};

const { fetchAppointments, removeAppointment,addAppointment } = asyncActions;

const appointmentsSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {
        addNewAppointment(state, action) {
            state.appointments = [...state.appointments, action.payload];
        },
        deleteAppointment(state, action: PayloadAction<string>) {
            const filtredArr = state.appointments.filter(
                (item) => item.id !== action.payload
            );
            state.appointments = filtredArr;
        },
        removeAllAppointments(state) {
            state.appointments = [];
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchAppointments.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(
            asyncActions.fetchAppointments.fulfilled,
            (
                state: IAppointmentsState,
                action: PayloadAction<IAppointment[]>
            ) => {
                state.loading = false;
                state.appointments = action.payload;
            }
        );
        builder.addCase(fetchAppointments.rejected, (state) => {
            state.loading = false;
        });

        //delete appointment
        builder.addCase(removeAppointment.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(removeAppointment.fulfilled, (state) => {
            state.loading = false;
            state.error = null;
        });
        builder.addCase(removeAppointment.rejected, (state) => {
            state.loading = false;
        });

        // add appointment
        builder.addCase(addAppointment.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addAppointment.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.appointments.push(action.payload as IAppointment);
        });
        builder.addCase(addAppointment.rejected, (state) => {
            state.loading = false;
        });
    },
});

export const appointmentsActions = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
