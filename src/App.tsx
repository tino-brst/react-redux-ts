import React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import { AddTodo, FilterSelect, Todos } from 'app/components'
import { loadTodos } from 'app/store/todos/actions'
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

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      loadTodos,
    },
    dispatch,
  )
}

const connector = connect(mapStateToProps, mapDispatchToProps)
const ConnectedApp = connector(App)

export { ConnectedApp as App }
