import store from './app/store.js';
import { cakeActions } from './app/features/cake/cakeSlice.js';
import { iceCreamActions } from './app/features/icecream/iceCreamSlice.js';
import { fetchUsers } from './app/features/user/userSlice.js';

const unsubscribe = store.subscribe(() => {});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.restocked(1));

// unsubscribe();
