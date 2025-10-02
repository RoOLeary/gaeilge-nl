import React from "react";

const STORAGE_KEY = "astro-counter";

function useLocalStorageNumber(key: string, initial: number) {
  const [value, setValue] = React.useState<number>(() => {
    if (typeof window === "undefined") return initial;
    const raw = window.localStorage.getItem(key);
    return raw !== null ? Number(raw) : initial;
  });

  // Persist on change
  React.useEffect(() => {
    window.localStorage.setItem(key, String(value));
  }, [key, value]);

  // Sync across tabs/windows
  React.useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        setValue(Number(e.newValue));
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [key]);

  return [value, setValue] as const;
}

export default function Counter() {
  const [count, setCount] = useLocalStorageNumber(STORAGE_KEY, 0);
  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ display: "inline-flex", gap: "0.5rem", alignItems: "center" }}>
      <button onClick={dec} aria-label="Decrement">−</button>
      <output aria-live="polite" style={{ minWidth: 32, textAlign: "center" }}>
        {count}
      </output>
      <button onClick={inc} aria-label="Increment">+</button>
      <button onClick={reset} aria-label="Reset">Reset</button>
    </div>
  );
}
