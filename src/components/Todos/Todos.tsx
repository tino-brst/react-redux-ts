import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import type { StoreState } from 'app/store'
import { Filter, Todo } from 'app/types'
import { toggleTodo } from 'app/store/todos/actions'

type StateProps = {
  todos: Array<Todo>
  activeFilter: Filter
}

type DispatchProps = {
  toggleTodo: (id: string) => void
}

type Props = StateProps & DispatchProps

function Todos(props: Props) {
  const filteredTodos = getFilteredTodos(props.todos, props.activeFilter)

  return (
    <div>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => props.toggleTodo(todo.id)}
              />
              {todo.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
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

function mapState(state: StoreState) {
  return {
    activeFilter: state.activeFilter,
    todos: state.todos,
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

const ConnectedTodos = connect(mapState, mapDispatch)(Todos)

export { ConnectedTodos as Todos }
