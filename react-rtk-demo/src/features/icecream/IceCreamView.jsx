import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { iceCreamActions } from './iceCreamSlice';

export default function IceCreamView() {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  return (
    <div>
      <h2>Number of ice creams - {numOfIceCreams}</h2>
      <div
        style={{
          textAlign: 'center',
          marginTop: '20px',
        }}
      >
        <button onClick={() => dispatch(iceCreamActions.ordered())}>
          Order Ice Cream
        </button>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '20px',
          }}
        >
          <input
            style={{
              maxWidth: '50px',
              textAlign: 'center',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
            type='number'
            value={value}
            onChange={(e) => {
              setValue(parseInt(e.target.value));
            }}
          />
          <button onClick={() => dispatch(iceCreamActions.restocked(value))}>
            Restock Ice Creams
          </button>
        </div>
      </div>
    </div>
  );
}
