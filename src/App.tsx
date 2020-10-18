import React from 'react'
import { AddTodo, FilterSelect, Todos } from 'app/components'

export function App() {
  return (
    <div className="app">
      <h1>Todos</h1>
      <AddTodo />
      <FilterSelect />
      <Todos />
    </div>
  )
}
