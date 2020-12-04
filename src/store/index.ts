import { Action, combineReducers } from 'redux'
import type { ThunkAction } from 'redux-thunk'
import { todosReducer } from './todos'
import { activeFilterReducer } from './activeFilter'
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  todos: todosReducer,
  activeFilter: activeFilterReducer,
})

export const store = configureStore({ reducer: rootReducer })

export type AppState = ReturnType<typeof rootReducer>
export type AppAction = Action<string>
export type AppThunkAction = ThunkAction<void, AppState, unknown, AppAction>
