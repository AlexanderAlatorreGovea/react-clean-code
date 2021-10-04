import React, { useState } from "react";

export function Home() {
  return <Counter description="My Counter" defaultCount={0} />;
}

export function Counter({ description, defaultCount }) {
  const [count, setCount] = useState(defaultCount);
  const [incrementor, setIncrementor] = useState(1);

  return (
    <div>
      <h2>
        DESC: {description} - DC: {defaultCount}
      </h2>
      <label>
        Incrementor:
        <input
          value={incrementor}
          onChange={(evt) => {
            setIncrementor(parseInt(evt.target.value) || 1);
          }}
          type="number"
        />
      </label>
      <button
        aria-label="Subtract from Counter"
        onClick={() => setCount(count - incrementor)}
      >
        -
      </button>
      Current Count: {count}
      <button
        aria-label="Add to Counter"
        onClick={() => setCount(count + incrementor)}
      >
        +
      </button>
    </div>
  );
}
