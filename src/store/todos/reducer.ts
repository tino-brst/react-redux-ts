import type { Reducer } from 'redux'
import type { Todo } from 'app/types'
import { TodosAction, TodosActionType, TodosState } from './types'

const initialState: TodosState = []

export const todosReducer: Reducer<TodosState, TodosAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case TodosActionType.add:
      const newTodo: Todo = {
        id: (Math.random() * 1000000).toFixed(0),
        title: action.payload,
        completed: false,
      }
      return [...state, newTodo]
    case TodosActionType.toggle:
      const todoId = action.payload
      return state.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      )
    default:
      return state
  }
}
