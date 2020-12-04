import type { Action } from 'redux'
import type { Filter } from 'app/types'

// State

export type ActiveFilterState = Filter

// Action Types

export enum ActiveFilterActionType {
  setActiveFilter = 'activeFilter/setActiveFilter',
}

// Actions

type SetAction = Action<ActiveFilterActionType.setActiveFilter> & {
  payload: Filter
}

export type ActiveFilterAction = SetAction
