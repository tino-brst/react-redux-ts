import React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import type { AppState } from 'app/store'
import { addTodo } from 'app/store/todos/actions'

type DispatchProps = {
  addTodo: (title: string) => void
}

type Props = DispatchProps

function AddTodo(props: Props) {
  const [inputValue, setInputValue] = React.useState('')
  const isValidInput = inputValue.trim() !== ''

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isValidInput) {
      props.addTodo(inputValue)
      setInputValue('')
    }
  }

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        className="add-todo__input"
        type="text"
        placeholder="new todo"
        value={inputValue}
        onChange={handleInputChange}
      />
      <input type="submit" value="Add" disabled={!isValidInput} />
    </form>
  )
}

function mapState(state: AppState) {
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
