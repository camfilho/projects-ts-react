import * as React from 'react';

const initialState = { count: 0 };
type CounterAction = BasicCounterAction | SetCounterAction;

type BasicCounterAction = {
  type: 'INCREMENT' | 'DECREMENT';
};

type SetCounterAction = {
  type: 'SET';
  payload: number;
};

type CounterState = {
  count: number;
};
const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'SET':
      return { count: action.payload };
    default:
      return state;
  }
};
const Counter = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });
  const set = (n: number) => dispatch({ type: 'SET', payload: n });

  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{state.count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={() => set(0)}>Reset</button>
        <button onClick={decrement}>Decrement</button>
      </section>
    </main>
  );
};

const Application = () => <Counter />;

export default Application;
