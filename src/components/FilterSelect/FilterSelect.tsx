import React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import { Filter } from 'app/types'
import type { AppState } from 'app/store'
import { setActiveFilter } from 'app/store/activeFilter/actions'

type Props = ConnectedProps<typeof connector>

function FilterSelect(props: Props) {
  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    props.setActiveFilter(event.target.value as Filter)
  }

  return (
    <div className="filter-select">
      <label>
        Show
        <select
          className="filter-select__select"
          value={props.activeFilter}
          onChange={handleSelectChange}
        >
          <option value={Filter.all}>All</option>
          <option value={Filter.complete}>Complete</option>
          <option value={Filter.incomplete}>Incomplete</option>
        </select>
      </label>
    </div>
  )
}

function mapState(state: AppState) {
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

const connector = connect(mapState, mapDispatch)
const ConnectedFilterSelect = connector(FilterSelect)

export { ConnectedFilterSelect as FilterSelect }
