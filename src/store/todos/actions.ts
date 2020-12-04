import type { Todo } from 'app/types'
import { request } from 'app/utils'
import type { AppThunkAction } from '..'
import { TodosAction, TodosActionType } from './types'

export function addTodo(title: string): TodosAction {
  return {
    type: TodosActionType.addTodo,
    payload: title,
  }
}

export function toggleTodo(id: string): TodosAction {
  return {
    type: TodosActionType.toggleTodo,
    payload: id,
  }
}

function loadTodosStart(): TodosAction {
  return {
    type: TodosActionType.loadTodosStart,
  }
}

function loadTodosSuccess(todos: Array<Todo>): TodosAction {
  return {
    type: TodosActionType.loadTodosSuccess,
    payload: todos,
  }
}

function loadTodosFailure(): TodosAction {
  return {
    type: TodosActionType.loadTodosFailure,
  }
}

export function loadTodos(): AppThunkAction {
  return async (dispatch) => {
    dispatch(loadTodosStart())
    try {
      const todos = await request('/todos')
      dispatch(loadTodosSuccess(todos))
    } catch {
      dispatch(loadTodosFailure())
    }
  }
}
