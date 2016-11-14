import { combineReducers } from 'redux'
import { ADD_TASK, TOGGLE_TASK, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function tasks(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TASK:
      return state.map((task, index) => {
        if (index === action.index) {
          return Object.assign({}, task, {
            completed: !task.completed
          })
        }
        return task
      })
    default:
      return state
  }
}

const taskApp = combineReducers({
  visibilityFilter,
  tasks
})

export default taskApp