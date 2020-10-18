import React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Filter } from 'app/types'
import type { StoreState } from 'app/store'
import { setActiveFilter } from 'app/store/activeFilter/actions'

type StateProps = {
  activeFilter: Filter
}

type DispatchProps = {
  setActiveFilter: (value: Filter) => void
}

type Props = StateProps & DispatchProps

function FilterSelect(props: Props) {
  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    props.setActiveFilter(event.target.value as Filter)
  }

  return (
    <div>
      <label>
        Show
        <select value={props.activeFilter} onChange={handleSelectChange}>
          <option value={Filter.all}>All</option>
          <option value={Filter.complete}>Complete</option>
          <option value={Filter.incomplete}>Incomplete</option>
        </select>
      </label>
    </div>
  )
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
      setActiveFilter,
    },
    dispatch,
  )
}

const ConnectedFilterSelect = connect(mapState, mapDispatch)(FilterSelect)

export { ConnectedFilterSelect as FilterSelect }
