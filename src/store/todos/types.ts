import type { Action } from 'redux'
import type { Todo } from 'app/types'

// State

export type TodosState = {
  items: Array<Todo>
  isLoading: boolean
  isError: boolean
}

// Action Types

export enum TodosActionType {
  add = 'todos/add',
  toggle = 'todos/toggle',
  loadStart = 'todos/loadStart',
  loadSuccess = 'todos/loadSuccess',
  loadFailure = 'todos/loadFailure',
}

// Actions

type AddAction = Action<TodosActionType.add> & {
  payload: string
}

type ToggleAction = Action<TodosActionType.toggle> & {
  payload: string
}

type LoadStartAction = Action<TodosActionType.loadStart>

type LoadSuccessAction = Action<TodosActionType.loadSuccess> & {
  payload: Array<Todo>
}

type LoadFailureAction = Action<TodosActionType.loadFailure>

export type TodosAction =
  | AddAction
  | ToggleAction
  | LoadStartAction
  | LoadSuccessAction
  | LoadFailureAction
