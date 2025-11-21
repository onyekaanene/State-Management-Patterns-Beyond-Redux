/*

4. Jotai

What is it?
Jotai is a minimalistic state management library inspired by Recoil, but with a simpler API.

When to Use It:
Applications that need a balance between simplicity and fine-grained state management.

Example:
The code below uses Jotai to manage a countAtom state, which holds the count value. The Counter component reads and updates this atom, displaying the count and providing a button to increment it.
*/

import { atom, useAtom } from 'jotai';

const countAtom = atom(0);

const Counter = () => {
  const [count, setCount] = useAtom(countAtom);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};

/*
Pros:
Lightweight and intuitive.

Cons:
Smaller ecosystem compared to Redux or Recoil.
*/