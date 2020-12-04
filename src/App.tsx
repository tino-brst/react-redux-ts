import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { AddTodo, FilterSelect, Todos } from 'app/components'
import { loadTodos } from 'app/store/todos'
import type { AppState } from './store'

type Props = ConnectedProps<typeof connector>

function App(props: Props) {
  React.useEffect(() => {
    props.loadTodos()
  }, [])

  return (
    <div className="app">
      <h1>Todos</h1>
      <AddTodo />
      <FilterSelect />
      {props.isLoading ? 'Loading ...' : <Todos />}
    </div>
  )
}

function mapStateToProps(state: AppState) {
  return {
    isLoading: state.todos.isLoading,
  }
}

const mapDispatchToProps = {
  loadTodos,
}

const connector = connect(mapStateToProps, mapDispatchToProps)
const ConnectedApp = connector(App)

export { ConnectedApp as App }
