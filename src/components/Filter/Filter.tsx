import React from 'react'

export function Filter() {
  return (
    <div>
      <label>
        Show
        <select value="all">
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </label>
    </div>
  )
}
