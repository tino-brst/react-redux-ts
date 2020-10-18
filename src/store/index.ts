import { combineReducers, createStore } from 'redux'
import { todosReducer } from './todos/reducer'

const rootReducer = combineReducers({
  todos: todosReducer,
})

export const store = createStore(rootReducer)

export type StoreState = ReturnType<typeof rootReducer>
