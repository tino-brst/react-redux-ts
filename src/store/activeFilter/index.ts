import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Filter } from 'app/types'
import type { ActiveFilterState } from './types'

const initialState: ActiveFilterState = Filter.all as Filter

const activeFilterSlice = createSlice({
  name: 'activeFilter',
  initialState,
  reducers: {
    setActiveFilter: (_, action: PayloadAction<Filter>) => {
      return action.payload
    },
  },
})

const { reducer, actions } = activeFilterSlice
const { setActiveFilter } = actions

export { reducer as activeFilterReducer, setActiveFilter }
