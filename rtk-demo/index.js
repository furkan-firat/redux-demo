import store from './app/store.js';
import { ordered, restocked } from './app/features/cake/cakeSlice.js';

console.log('Initial State: ', store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('State updated!', store.getState());
});

store.dispatch(ordered());
store.dispatch(restocked(3));

unsubscribe();
