export function createStore(reducer) {
  let currentState
  const currentListener = []

  function getState() {
    return currentState
  }

  function dispatch(action) {
    currentState = reducer(currentState, action)
    currentListener.forEach(v => v())
    return action
  }

  function subscribe(listener) {
    currentListener.push(listener)
  }

  dispatch({ type: '@@/action.custom' })

  return { getState, dispatch, subscribe }
}