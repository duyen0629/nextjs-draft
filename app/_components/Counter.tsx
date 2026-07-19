"use client";

import { useState } from "react";

export default function Counter({ users }: { users: any[] }) {
  const [count, setCount] = useState(0);
  console.log(users);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
