/*

5. MobX

What is it?
MobX is a reactive state management library that uses observable data to automatically trigger updates.

When to Use It:
Applications that benefit from automatic state updates without manual intervention.

Example:
The code below uses MobX to create a CounterStore class with observable state (count) and an increment action. The Counter component, wrapped with observer, reacts to changes in the store and renders the count with a button to increment it.
*/

import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count++;
  }
}

const counterStore = new CounterStore();

const Counter = observer(() => (
  <div>
    <p>Count: {counterStore.count}</p>
    <button onClick={() => counterStore.increment()}>Increment</button>
  </div>
));

/*
Pros:
Automatic reactivity.
Scales well for complex applications.

Cons:
Requires a different mental model compared to Redux.
*/