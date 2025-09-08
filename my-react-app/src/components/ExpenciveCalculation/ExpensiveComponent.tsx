import React from 'react';
import { heavyCalculation } from '../../utils/calculations';
import type { ExpensiveComponentProps } from '../../types/demo.types';

/**
 * Компонент без мемоізації - виконує складні обчислення при кожному рендері
 */
const ExpensiveComponent: React.FC<ExpensiveComponentProps> = ({ 
  value, 
  onButtonClick 
}) => {
  console.log('🔴 ExpensiveComponent перерендерився');
  const expensiveValue = heavyCalculation(value);
  
  return (
    <div className="p-4 border border-red-300 rounded-lg bg-red-50">
      <h3 className="text-lg font-semibold text-red-800 mb-2">
        Без мемоізації
      </h3>
      <p className="text-sm text-red-600 mb-2">
        Результат обчислення: {expensiveValue}
      </p>
      <button 
        onClick={onButtonClick}
        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
      >
        Натисни мене
      </button>
    </div>
  );
};

export default ExpensiveComponent;