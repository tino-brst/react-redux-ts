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
  addTodo = 'todos/addTodo',
  toggleTodo = 'todos/toggleTodo',
  loadTodosStart = 'todos/loadTodosStart',
  loadTodosSuccess = 'todos/loadTodosSuccess',
  loadTodosFailure = 'todos/loadTodosFailure',
}

// Actions

type AddAction = Action<TodosActionType.addTodo> & {
  payload: string
}

type ToggleAction = Action<TodosActionType.toggleTodo> & {
  payload: string
}

type LoadStartAction = Action<TodosActionType.loadTodosStart>

type LoadSuccessAction = Action<TodosActionType.loadTodosSuccess> & {
  payload: Array<Todo>
}

type LoadFailureAction = Action<TodosActionType.loadTodosFailure>

export type TodosAction =
  | AddAction
  | ToggleAction
  | LoadStartAction
  | LoadSuccessAction
  | LoadFailureAction
