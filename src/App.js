import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Counter />
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <h1>Counter</h1>
      <p>This is a simple example of a React component.</p>

      <p>
        Current count: <strong>{count}</strong>
      </p>

      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
