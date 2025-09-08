import React, { useMemo } from 'react';
import { expensiveCalculation } from '../utils/calculations';

interface Props {
  value: number;
}

const MemoizedComponent: React.FC<Props> = ({ value }) => {
  console.log('🟢 MemoizedComponent перерендерився');
  
  const result = useMemo(() => {
    return expensiveCalculation(value);
  }, [value]);
  
  return (
    <div className="p-4 border border-green-300 rounded bg-green-50">
      <h3 className="font-semibold text-green-800">З useMemo</h3>
      <p>Результат: {result}</p>
    </div>
  );
};

export default MemoizedComponent;