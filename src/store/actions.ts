import { getPeriodicTableSymbols } from '../services/periodicTable.service';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { PeriodicTableElement } from '../constants/periodicTable.constant';


export const fetchPeriodicTableData = createAsyncThunk<PeriodicTableElement[], string>(
    'periodicTable/fetchElements',
    async () => {
      const result = await getPeriodicTableSymbols()
      return result;
    },
  )