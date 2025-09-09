import { useState } from "react";
import CounterWithoutMemo from "./CounterWithoutMemo";
import ExpensiveCalculationWithoutMemo from "./ExpensiveCalculationWithoutMemo";

export default function ParentWithoutMemo() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("1");

  // Без useCallback — функція створюється щоразу заново
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col gap-6 p-6 border-2 border-red-400 rounded-lg">
      <h1 className="text-xl font-bold text-red-600">Без мемоізації ❌</h1>

      <CounterWithoutMemo count={count} onIncrement={handleIncrement} />

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
        <ExpensiveCalculationWithoutMemo value={Number(value) || 0} />
      </div>
    </div>
  );
}
