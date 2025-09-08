import React from 'react';
import { expensiveCalculation, getCalculationCount } from '../utils/calculations';

interface Props {
  value: number;
}

const RegularComponent: React.FC<Props> = ({ value }) => {
  console.log('🔴 RegularComponent перерендерився');
  const result = expensiveCalculation(value);
  
  return (
    <div className="p-4 border border-red-300 rounded bg-red-50">
      <h3 className="font-semibold text-red-800">Без мемоізації</h3>
      <p>Результат: {result}</p>
      <p className="text-xs text-red-600">Обчислень виконано: {getCalculationCount()}</p>
    </div>
  );
};

export default RegularComponent;