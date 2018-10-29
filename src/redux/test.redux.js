// import { createStore } from 'redux'
import { createStore } from './custom.redux'

const ADDNUM = 'ADDNUM'
const REDUCENUM = 'REDUCENUM'

const initState = { num: 10 } 

function num (state = initState, action) {
  switch(action.type) {
    case ADDNUM:
      return { ...state, num: state.num + 1 }
    case REDUCENUM:
      return { ...state, num: state.num - 1 }
    default:
      return state
  }
}

export function doAdd() {
  return { type: ADDNUM }
}

export function doReduce() {
  return { type: REDUCENUM }
}
const store = createStore(num)

export default store