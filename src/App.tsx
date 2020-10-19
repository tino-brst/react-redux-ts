import React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { AddTodo, FilterSelect, Todos } from 'app/components'
import { loadTodos } from 'app/store/todos/actions'
import type { AppState } from './store'

type StateProps = {
  isLoading: boolean
}

type DispatchProps = {
  loadTodos: () => void
}

type Props = DispatchProps & StateProps

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

function mapState(state: AppState) {
  return {
    isLoading: state.todos.isLoading,
  }
}

function mapDispatch(dispatch: Dispatch) {
  return bindActionCreators(
    {
      loadTodos,
    },
    dispatch,
  )
}

const ConnectedApp = connect(mapState, mapDispatch)(App)

export { ConnectedApp as App }
