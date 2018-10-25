// import { createStore } from 'redux'
import { createStore } from './custom.redux'

const ADDNUM = 'ADDNUM'
const REDUCENUM = 'REDUCENUM'

function num (state = 0, action) {
  switch(action.type) {
    case ADDNUM:
      return state + 1
    case REDUCENUM:
      return state - 1
    default:
      return 10
  }
}

function doAdd() {
  return { type: ADDNUM }
}

function doReduce() {
  return { type: REDUCENUM }
}

const store = createStore(num)
console.log(store.getState())

store.dispatch(doAdd())
console.log(store.getState())
store.dispatch(doReduce())
console.log(store.getState())

export default store