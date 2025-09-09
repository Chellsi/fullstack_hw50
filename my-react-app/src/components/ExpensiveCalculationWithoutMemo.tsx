type Props = {
    value: number;
  };
  
  // Без useMemo — обчислення завжди запускається при будь-якому ререндері
  export default function ExpensiveCalculationWithoutMemo({ value }: Props) {
    console.log("🔄 Виконується важке обчислення (без мемоізації)...");
    let sum = 0;
    for (let i = 0; i < 10_000_000; i++) {
      sum += Math.sqrt(value + i);
    }
  
    return (
      <div className="p-4 border rounded-lg shadow bg-white">
        <p className="text-lg font-semibold">Результат складного обчислення:</p>
        <p className="text-red-600">{sum.toFixed(2)}</p>
      </div>
    );
  }
  