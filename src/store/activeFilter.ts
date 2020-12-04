import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Filter } from 'app/types'

export type ActiveFilterState = Filter

const initialState = Filter.all as ActiveFilterState

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
