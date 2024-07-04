import { createSlice } from '@reduxjs/toolkit'
import { fetchPeriodicTableData } from '../actions'
// import { getPeriodicTableSymbols } from '../../services/periodicTable.service'
// import { PeriodicTableElement } from '../../constants/periodicTable.constant'

export interface periodicTableState {
    data: string[],
    displayName: {
        name: string;
        last: string;
    },
    coincidences: {
        name: string[];
        last: string[];
    }
}

const initialState: periodicTableState = {
    data: [],
    displayName: {
        name: '',
        last: ''
    },
    coincidences: {
        name: [],
        last: []
    }
}

export const periodicTable = createSlice({
  name: 'periodicTable',
  initialState,
  reducers: {
    setCoincidences: (state, action) => {
        state.coincidences = action.payload.coincidences
        state.displayName = action.payload.displayName
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPeriodicTableData.pending, (state) => {
        state.data = [];
    }),
    builder.addCase(fetchPeriodicTableData.fulfilled, (state, action) => {
        state.data = action.payload.map(el => el.symbol);
    }),
    builder.addCase(fetchPeriodicTableData.rejected, () => {
        // Do something on data rejected
    })
  }
})

// Action creators are generated for each case reducer function
export const { setCoincidences } = periodicTable.actions
// export const selectPeriodicTable = (state) => state.
export default periodicTable.reducer