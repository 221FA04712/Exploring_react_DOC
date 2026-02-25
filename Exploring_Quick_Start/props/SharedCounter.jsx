import { useState } from "react";

function SharedCounter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CounterButton count={count} onClick={() => setCount(count + 1)} />
      <CounterButton count={count} onClick={() => setCount(count + 1)} />
    </>
  );
}

function CounterButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count}</button>;
}

export default SharedCounter;