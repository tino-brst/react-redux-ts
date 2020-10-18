import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import type { StoreState } from 'app/store'
import type { Todo } from 'app/types'
import { toggleTodo } from 'app/store/todos/actions'

type StateProps = {
  todos: Array<Todo>
}

type DispatchProps = {
  toggleTodo: (id: string) => void
}

type OwnProps = {}

type Props = StateProps & DispatchProps & OwnProps

function Todos(props: Props) {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
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

function mapState(state: StoreState) {
  return {
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
