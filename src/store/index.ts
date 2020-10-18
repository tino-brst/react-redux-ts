import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { todosReducer } from './todos/reducer'
import { activeFilterReducer } from './activeFilter/reducer'

const rootReducer = combineReducers({
  todos: todosReducer,
  activeFilter: activeFilterReducer,
})

export const store = createStore(rootReducer, devToolsEnhancer({}))

export type StoreState = ReturnType<typeof rootReducer>
