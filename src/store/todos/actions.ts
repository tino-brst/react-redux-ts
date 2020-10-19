import type { Todo } from 'app/types'
import type { AppThunkAction } from '..'
import { TodosAction, TodosActionType } from './types'

export function addTodo(title: string): TodosAction {
  return {
    type: TodosActionType.add,
    payload: title,
  }
}

export function toggleTodo(id: string): TodosAction {
  return {
    type: TodosActionType.toggle,
    payload: id,
  }
}

function loadTodosStart(): TodosAction {
  return {
    type: TodosActionType.loadStart,
  }
}

function loadTodosSuccess(todos: Array<Todo>): TodosAction {
  return {
    type: TodosActionType.loadSuccess,
    payload: todos,
  }
}

function loadTodosFailure(): TodosAction {
  return {
    type: TodosActionType.loadFailure,
  }
}

export function loadTodos(): AppThunkAction {
  return async (dispatch) => {
    dispatch(loadTodosStart())
    try {
      const response = await fetch('http://jsonplaceholder.typicode.com/todos')
      const data = await response.json()
      dispatch(loadTodosSuccess(data))
    } catch {
      dispatch(loadTodosFailure())
    }
  }
}
