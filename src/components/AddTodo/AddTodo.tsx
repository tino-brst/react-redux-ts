import React from 'react'

export function AddTodo() {
  return (
    <form>
      <input type="text" placeholder="new todo" />
      <input type="submit" value="Add" />
    </form>
  )
}
