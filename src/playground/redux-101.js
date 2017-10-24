import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const setCount = ({ count } = {}) => ({
  type: "SET",
  count
});

const resetCount = () => ({
  type : "RESET"
});

// Reducers

// 1. Regucers are pure functions
// 2. Never changes state and action
const countReducer = ((state = { count : 0 }, action)=>{
  switch(action.type){
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT' :
      return {
        count: state.count - action.decrementBy
      }
    case "RESET" :
      return {
        count: 0
      }
    case 'SET' :
      return {
        count : action.count
      }
    default:
      return state;  
  }

});

const store = createStore(countReducer)

const unsubscribe = store.subscribe(()=>{
  console.log(store.getState());
});




store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 5}));
store.dispatch(decrementCount({ decrementBy: 5}));

store.dispatch(setCount({count:-100}));
store.dispatch(resetCount());
