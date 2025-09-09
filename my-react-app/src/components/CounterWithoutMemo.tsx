type Props = {
    count: number;
    onIncrement: () => void;
  };
  
  // Без React.memo — ререндериться завжди
  export default function CounterWithoutMemo({ count, onIncrement }: Props) {
    console.log("🔄 Рендер Counter (без мемоізації)");
  
    return (
      <div className="p-4 border rounded-lg shadow bg-gray-50">
        <p className="font-medium">Лічильник: {count}</p>
        <button
          onClick={onIncrement}
          className="px-3 py-1 mt-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Додати +1
        </button>
      </div>
    );
  }
  