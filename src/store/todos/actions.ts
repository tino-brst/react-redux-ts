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
