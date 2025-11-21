/*
2. Zustand

What is it?
Zustand is a small, fast, and scalable state management library. It uses hooks to manage state and provides a much simpler API compared to Redux.

When to Use It:
Applications that require global state but not Redux’s complexity.

Example:
The code below uses Zustand to create a simple store with a count state and an increment function, which updates the state. The Counter component consumes the store to display the current count and increment it when the button is clicked.

*/

import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

const Counter = () => {
  const { count, increment } = useStore();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

/*
Pros:
Simple API and minimal boilerplate.
Built-in support for TypeScript.

Cons:
Limited ecosystem compared to Redux.
*/