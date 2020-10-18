import type { Action } from 'redux'
import type { Todo } from 'app/types'

// State

export type TodosState = Array<Todo>

// Action Types

export enum TodosActionType {
  add = 'todos/add',
  toggle = 'todos/toggle',
}

// Actions

type AddAction = Action<TodosActionType.add> & {
  payload: string
}

type ToggleAction = Action<TodosActionType.toggle> & {
  payload: string
}

export type TodosAction = AddAction | ToggleAction
