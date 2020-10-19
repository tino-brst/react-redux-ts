import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk, { ThunkAction } from 'redux-thunk'
import { todosReducer } from './todos/reducer'
import { activeFilterReducer } from './activeFilter/reducer'
import type { TodosAction } from './todos/types'
import type { ActiveFilterAction } from './activeFilter/types'

const rootReducer = combineReducers({
  todos: todosReducer,
  activeFilter: activeFilterReducer,
})

const middleware = [thunk]
const storeEnhancer = composeWithDevTools(applyMiddleware(...middleware))

export const store = createStore(rootReducer, storeEnhancer)

export type AppState = ReturnType<typeof rootReducer>
export type AppAction = TodosAction | ActiveFilterAction
export type AppThunkAction = ThunkAction<void, AppState, unknown, AppAction>
