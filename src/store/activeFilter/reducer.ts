import type { Reducer } from 'redux'
import { Filter } from 'app/types'
import {
  ActiveFilterAction,
  ActiveFilterActionType,
  ActiveFilterState,
} from './types'

const initialState: ActiveFilterState = Filter.all

export const activeFilterReducer: Reducer<
  ActiveFilterState,
  ActiveFilterAction
> = (state = initialState, action) => {
  switch (action.type) {
    case ActiveFilterActionType.setActiveFilter:
      return action.payload
    default:
      return state
  }
}
