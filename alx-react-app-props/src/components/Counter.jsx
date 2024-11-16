import React, { useReducer } from 'react';

const initialState = { count: 0 }

const reducer = (state, action) => {
  return {count: state.count + 1}
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const increaseCount = () => {
    dispatch({type: "increase"});
  }

  return (
    <div>
      <h2>Count: {state.count}</h2>
    </div>
  )
}



export default Counter;