import { getUniqueId } from 'app/utils'
import type { Reducer } from 'redux'
import { TodosAction, TodosActionType, TodosState } from './types'

const initialState: TodosState = {
  items: [],
  isLoading: false,
  isError: false,
}

export const todosReducer: Reducer<TodosState, TodosAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case TodosActionType.addTodo:
      return {
        ...state,
        items: state.items.concat({
          id: getUniqueId(),
          title: action.payload,
          completed: false,
        }),
      }
    case TodosActionType.toggleTodo:
      return {
        ...state,
        items: state.items.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      }
    case TodosActionType.loadTodosStart:
      return {
        ...state,
        isLoading: true,
      }
    case TodosActionType.loadTodosSuccess:
      return {
        ...state,
        isLoading: false,
        isError: false,
        items: action.payload,
      }
    case TodosActionType.loadTodosFailure:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      return state
  }
}
