import type { Action } from 'redux'
import type { Filter } from 'app/types'

// State

export type ActiveFilterState = Filter

// Action Types

export enum ActiveFilterActionType {
  set = 'activeFilter/set',
}

// Actions

type SetAction = Action<ActiveFilterActionType.set> & {
  payload: Filter
}

export type ActiveFilterAction = SetAction
