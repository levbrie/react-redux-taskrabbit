import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions'

let AddTask = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTask(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Task
        </button>
      </form>
    </div>
  )
}
AddTask = connect()(AddTask)

export default AddTask