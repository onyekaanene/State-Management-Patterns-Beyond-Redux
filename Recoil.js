/*

3. Recoil

What is it?
Recoil is a state management library designed by Facebook for React applications. It introduces atoms (shared state) and selectors (derived state) for managing application state.

When to Use It:
Applications with complex state dependencies or interrelated data.

Example:
The code below uses Recoil to manage state, with an atom for countState and a selector to compute doubleCountState based on it. The Counter component reads and updates the countState while displaying both the count and its doubled value.
*/

import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

const countState = atom({
  key: 'countState',
  default: 0,
});

const doubleCountState = selector({
  key: 'doubleCountState',
  get: ({ get }) => get(countState) * 2,
});

const Counter = () => {
  const [count, setCount] = useRecoilState(countState);
  const doubleCount = useRecoilValue(doubleCountState);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

/*
Pros:
Fine-grained reactivity.
Built specifically for React.

Cons:
Relatively new and still evolving.
*/