import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { asyncActions } from 'store/actions/asyncActionCreators';
import { IAppointment } from 'types/appointment';

interface IAppointmentsState {
    appointments: IAppointment[];
    loading: boolean;
}

const initialState: IAppointmentsState = {
    appointments: [],
    loading: false,
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
        });
        builder.addCase(removeAppointment.rejected, (state) => {
            state.loading = false;
        });

        // add appointment
        builder.addCase(addAppointment.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addAppointment.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(addAppointment.rejected, (state) => {
            state.loading = false;
        });
    },
});

export const appointmentsActions = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
