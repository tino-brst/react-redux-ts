import React from 'react'
import { AddTodo, Filter, Todos } from './components'

export function App() {
  return (
    <div className="app">
      <h1>Todos</h1>
      <AddTodo />
      <Filter />
      <Todos />
    </div>
  )
}
