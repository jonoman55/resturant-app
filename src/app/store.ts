import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from '../features/reservationSlice';
import customersReducer from '../features/customerSlice';

export const store = configureStore({
    reducer: {
        reservations: reservationsReducer,
        customer: customersReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;