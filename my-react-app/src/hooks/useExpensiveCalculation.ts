import { useMemo } from 'react';
import { heavyCalculation } from '../utils/calculations';

/**
 * Кастомний хук для мемоізації складних обчислень
 * @param value - значення для обчислення
 * @returns мемоізований результат обчислення
 */
export const useExpensiveCalculation = (value: number): number => {
  return useMemo(() => {
    console.log('🔵 Кастомний хук: виконується обчислення');
    return heavyCalculation(value);
  }, [value]);
};