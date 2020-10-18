import React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import type { StoreState } from 'app/store'
import { addTodo } from 'app/store/todos/actions'

type DispatchProps = {
  addTodo: (title: string) => void
}

type Props = DispatchProps

function AddTodo(props: Props) {
  const [inputValue, setInputValue] = React.useState('')

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    props.addTodo(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="new todo"
        value={inputValue}
        onChange={handleInputChange}
      />
      <input type="submit" value="Add" />
    </form>
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
      addTodo,
    },
    dispatch,
  )
}

const ConnectedAddTodo = connect(mapState, mapDispatch)(AddTodo)

export { ConnectedAddTodo as AddTodo }
