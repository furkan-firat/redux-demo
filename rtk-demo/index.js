import store from './app/store.js';
import { cakeActions } from './app/features/cake/cakeSlice.js';
import { iceCreamActions } from './app/features/icecream/iceCreamSlice.js';

console.log('Initial State: ', store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('State updated!', store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.restocked(1));

unsubscribe();
