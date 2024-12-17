import { useSelector, useDispatch } from 'react-redux';
import { cakeActions } from './cakeSlice';

export default function CakeView() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cake - {numOfCakes}</h2>
      <button onClick={() => dispatch(cakeActions.ordered())}>
        Order cake
      </button>
      <button onClick={() => dispatch(cakeActions.restocked(3))}>
        Restoke cakes
      </button>
    </div>
  );
}
