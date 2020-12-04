import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import type { AppState } from 'app/store'
import { addTodo } from 'app/store/todos'

type Props = ConnectedProps<typeof connector>

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

function mapStateToProps(state: AppState) {
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps = {
  addTodo,
}

const connector = connect(mapStateToProps, mapDispatchToProps)
const ConnectedAddTodo = connector(AddTodo)

export { ConnectedAddTodo as AddTodo }
