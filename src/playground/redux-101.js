import { createStore } from 'redux';

// Action generators - functions that return action objects

//EXAMPLE TO EXPLAIN DESTRUCTURING THE PAYLOAD PIECE
// const add = ( {a, b}, c ) => {
//   return a + b + c;  
// }

// console.log(add({ a: 15, b: 12 }, 100 ));

// Step 1 - create functions (Arrow functions)
const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: 'INCREMENT',
    // incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
    incrementBy
  };
}

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: 'DECREMENT',
    decrementBy
  };
}

const setCount = ( { count } ) => {
  return {
    type: 'SET',
    count
  };
}

const resetCount = () => {
  return {
    type: 'RESET'
  };
}

// Reducers
// 1. Reducers are pure functions - output is only determined by the input
// 2. Never change state or actions - dont change it directly

//----------------------
//Pure function
// const add = (a, b) => {
//   return a + b;
// }
//----------------------
//----------------------
//Not pure function
// let a = 10;
// const add = (b) => {
//   return a + b;
// }
//---------------------- 

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

//------------------

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});


// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5}));

// store.dispatch({
//   type: 'INCREMENTt'
// });

store.dispatch(incrementCount());

// store.dispatch({
//   type: 'RESET'
// });

store.dispatch(resetCount());

// store.dispatch({
//   type: 'DECREMENT'
// });

store.dispatch(decrementCount());

// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10
// });

store.dispatch(decrementCount( {decrementBy: 10} ));

// store.dispatch({
//   type: 'SET',
//   count: 101
// });

store.dispatch(setCount({ count: -101 }));