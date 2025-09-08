import React, { useMemo } from 'react';
import { heavyCalculation } from '../../utils/calculations';
import type { ExpensiveComponentProps } from '../../types/demo.types';

/**
 * Компонент з useMemo - мемоізує результат складного обчислення
 */
const MemoizedExpensive: React.FC<ExpensiveComponentProps> = ({ 
  value, 
  onButtonClick 
}) => {
  console.log('🟢 MemoizedExpensive перерендерився');
  
  // useMemo - мемоізує результат складного обчислення
  const expensiveValue = useMemo(() => {
    return heavyCalculation(value);
  }, [value]);
  
  return (
    <div className="p-4 border border-green-300 rounded-lg bg-green-50">
      <h3 className="text-lg font-semibold text-green-800 mb-2">
        З useMemo
      </h3>
      <p className="text-sm text-green-600 mb-2">
        Результат обчислення: {expensiveValue}
      </p>
      <button 
        onClick={onButtonClick}
        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
      >
        Натисни мене
      </button>
    </div>
  );
};

export default MemoizedExpensive;