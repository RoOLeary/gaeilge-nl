import { useEffect, useRef, useState } from "react";

type Props = {
  initialCount?: number;
  delayMs?: number; // when to auto-increment once after mount
};

export default function CounterWithTimeout({ initialCount = 0, delayMs = 1500 }: Props) {
  const [count, setCount] = useState(initialCount);
  const [tick, setTick] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  // One-shot timeout: bump the counter after delayMs
  useEffect(() => {
    timeoutRef.current = window.setTimeout(() => setCount((c) => c + 1), delayMs);
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [delayMs]);

  // Optional: a small “heartbeat” tick every second to show cleanup works
  useEffect(() => {
    intervalRef.current = window.setInterval(() => setTick((t) => t + 1), 1000);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="counter wrap" style={{ fontFamily: "system-ui", lineHeight: 1.4 }}>
      <h2>Counter Island</h2>
      <p>
        Count: <strong>{count}</strong>
      </p>
      <p aria-live="polite" style={{ opacity: 0.7, fontSize: 12 }}>
        Ticking every second: {tick}s
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => setCount((c) => c + 1)}>+1</button>
        <button onClick={() => setCount((c) => c - 1)}>-1</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <style>{`
        .counter.wrap button {
          padding: 0.5rem 0.75rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: #fafafa;
          cursor: pointer;
        }
        .counter.wrap button:hover { background: #f0f0f0; }
      `}</style>
    </div>
  );
}
