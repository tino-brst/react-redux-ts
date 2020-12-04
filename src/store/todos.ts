import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getUniqueId, request } from 'app/utils'
import type { Todo } from 'app/types'
import type { AppThunkAction } from './'

type TodosState = {
  items: Array<Todo>
  isLoading: boolean
  isError: boolean
}

const initialState: TodosState = {
  items: [],
  isLoading: false,
  isError: false,
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        items: state.items.concat({
          id: getUniqueId(),
          title: action.payload,
          completed: false,
        }),
      }
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        items: state.items.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      }
    },
    loadTodosStart: (state) => {
      return {
        ...state,
        isLoading: true,
      }
    },
    loadTodosSuccess: (state, action: PayloadAction<Array<Todo>>) => {
      return {
        ...state,
        isLoading: false,
        isError: false,
        items: action.payload,
      }
    },
    loadTodosFailure: (state) => {
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    },
  },
})

const { reducer, actions } = todosSlice
const {
  addTodo,
  toggleTodo,
  loadTodosStart,
  loadTodosSuccess,
  loadTodosFailure,
} = actions

function loadTodos(): AppThunkAction {
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

export { reducer as todosReducer, addTodo, toggleTodo, loadTodos }
