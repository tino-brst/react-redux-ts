import { combineReducers, createStore } from 'redux'
import { todosReducer } from './todos/reducer'
import { activeFilterReducer } from './activeFilter/reducer'

const rootReducer = combineReducers({
  todos: todosReducer,
  activeFilter: activeFilterReducer,
})

export const store = createStore(rootReducer)

export type StoreState = ReturnType<typeof rootReducer>
