import { memo } from "react";

type Props = {
  count: number;
  onIncrement: () => void;
};

// React.memo — компонент не буде ререндеритись без зміни props
function CounterComponent({ count, onIncrement }: Props) {
  console.log("🔄 Рендер Counter");

  return (
    <div className="p-4 border rounded-lg shadow bg-gray-50">
      <p className="font-medium">Лічильник: {count}</p>
      <button
        onClick={onIncrement}
        className="px-3 py-1 mt-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Додати +1
      </button>
    </div>
  );
}

export const Counter = memo(CounterComponent);
