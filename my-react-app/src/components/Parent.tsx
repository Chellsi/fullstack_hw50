import { useState, useCallback } from "react";
import ExpensiveCalculation from "./ExpensiveCalculation";
import { Counter } from "./Counter";

export default function Parent() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("1");

  // useCallback — мемоізація функції, щоб не ререндерився Counter без потреби
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="flex flex-col gap-6 p-6">
      <h1 className="text-2xl font-bold">Демонстрація мемоізації</h1>

      <Counter count={count} onIncrement={handleIncrement} />

      <div className="p-4 border rounded-lg bg-gray-100">
        <label className="block mb-2">
          Значення для обчислень:
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="ml-2 px-2 py-1 border rounded"
          />
        </label>
        <ExpensiveCalculation value={Number(value) || 0} />
      </div>
    </div>
  );
}
