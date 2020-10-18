import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { todosReducer } from './todos/reducer'
import { activeFilterReducer } from './activeFilter/reducer'

const rootReducer = combineReducers({
  todos: todosReducer,
  activeFilter: activeFilterReducer,
})

const middleware = [thunk]
const storeEnhancer = composeWithDevTools(applyMiddleware(...middleware))

export const store = createStore(rootReducer, storeEnhancer)

export type StoreState = ReturnType<typeof rootReducer>
