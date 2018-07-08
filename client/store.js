import { createStore } from 'redux';

const reducer = (state, action) => {
  if (action.type === 'INC') {
    return state + 1;
  }
  return null;
};

const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log('Hey store changed', store.getState());
});

store.dispatch({ type: 'INC', payload: 1 });
