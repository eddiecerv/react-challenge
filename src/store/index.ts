import { configureStore } from '@reduxjs/toolkit';
import periodicTableReducer, { periodicTableState } from './reducers/periodicTable.reducer';

export default configureStore({
    reducer: {
        periodicTable: periodicTableReducer
    },
})

export interface RootState {
    periodicTable: periodicTableState;
}