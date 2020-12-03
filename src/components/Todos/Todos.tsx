import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import type { AppState } from 'app/store'
import { Filter, Todo } from 'app/types'
import { toggleTodo } from 'app/store/todos/actions'

type Props = ConnectedProps<typeof connector>

function Todos(props: Props) {
  const filteredTodos = getFilteredTodos(props.todos, props.activeFilter)

  return (
    <ul className="todos">
      {filteredTodos.map((todo) => (
        <li className="todos__item" key={todo.id}>
          <label>
            <input
              className="todos__item-checkbox"
              type="checkbox"
              checked={todo.completed}
              onChange={() => props.toggleTodo(todo.id)}
            />
            {todo.title}
          </label>
        </li>
      ))}
    </ul>
  )
}

function getFilteredTodos(todos: Array<Todo>, filter: Filter): Array<Todo> {
  switch (filter) {
    case Filter.all:
      return todos
    case Filter.complete:
      return todos.filter((todo) => todo.completed)
    case Filter.incomplete:
      return todos.filter((todo) => !todo.completed)
  }
}

function mapState(state: AppState) {
  return {
    activeFilter: state.activeFilter,
    todos: state.todos.items,
  }
}

function mapDispatch(dispatch: Dispatch) {
  return bindActionCreators(
    {
      toggleTodo,
    },
    dispatch,
  )
}

const connector = connect(mapState, mapDispatch)
const ConnectedTodos = connector(Todos)

export { ConnectedTodos as Todos }
