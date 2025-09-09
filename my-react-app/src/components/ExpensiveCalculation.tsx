import { useMemo } from "react";

type Props = {
  value: number;
};

// Компонент демонструє useMemo для складних обчислень
export default function ExpensiveCalculation({ value }: Props) {
  const result = useMemo(() => {
    console.log("🔄 Виконується важке обчислення...");
    let sum = 0;
    for (let i = 0; i < 10_000_000; i++) {
      sum += Math.sqrt(value + i);
    }
    return sum.toFixed(2);
  }, [value]);

  return (
    <div className="p-4 border rounded-lg shadow bg-white">
      <p className="text-lg font-semibold">Результат складного обчислення:</p>
      <p className="text-blue-600">{result}</p>
    </div>
  );
}
