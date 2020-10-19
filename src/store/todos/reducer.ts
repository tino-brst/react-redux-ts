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
    case TodosActionType.add:
      return {
        ...state,
        items: state.items.concat({
          id: (Math.random() * 1000000).toFixed(0),
          title: action.payload,
          completed: false,
        }),
      }
    case TodosActionType.toggle:
      return {
        ...state,
        items: state.items.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      }
    case TodosActionType.loadStart:
      return {
        ...state,
        isLoading: true,
      }
    case TodosActionType.loadSuccess:
      return {
        ...state,
        isLoading: false,
        isError: false,
        items: action.payload,
      }
    case TodosActionType.loadFailure:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      return state
  }
}
