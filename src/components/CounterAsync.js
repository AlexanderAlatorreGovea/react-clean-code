import React, { useEffect, useState } from "react";

const CounterAsync = () => {
  let description = "My Counter";
  let defaultCount = 0;

  const [count, setCount] = useState(defaultCount);
  const [incrementor, setIncrementor] = useState(1);
  const [bigEnough, setBigEnough] = useState(defaultCount >= 15);

  useEffect(() => {
    let id;

    if (count >= 15) {
      id = setTimeout(() => setBigEnough(true), 300);
    }

    return function cleanup() {
      clearTimeout(id);
    };
  });

  // You
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
        onClick={() => setTimeout(() => setCount(count + incrementor), 200)}
      >
        +
      </button>
      {bigEnough ? null : <div>I am too small</div>}
    </div>
  );
};

export function HomePage() {
  return <CounterAsync description="My Counter" defaultCount={0} />;
}

export default CounterAsync;
