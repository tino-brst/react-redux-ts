import React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { AddTodo, FilterSelect, Todos } from 'app/components'
import { loadTodos } from 'app/store/todos/actions'

type DispatchProps = {
  loadTodos: () => void
}

type Props = DispatchProps

function App(props: Props) {
  React.useEffect(() => {
    props.loadTodos()
  }, [])

  return (
    <div className="app">
      <h1>Todos</h1>
      <AddTodo />
      <FilterSelect />
      <Todos />
    </div>
  )
}

function mapDispatch(dispatch: Dispatch) {
  return bindActionCreators(
    {
      loadTodos,
    },
    dispatch,
  )
}

const ConnectedApp = connect(null, mapDispatch)(App)

export { ConnectedApp as App }
