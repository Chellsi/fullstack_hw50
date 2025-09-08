/**
 * Функція для складних обчислень (імітація)
 * @param num - число для обчислення
 * @returns результат складного обчислення
 */
export const heavyCalculation = (num: number): number => {
    console.log('🔄 Виконується складне обчислення...');
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += num * i;
    }
    return result;
  };
  
  /**
   * Функція для обробки елементів списку
   * @param value - базове значення
   * @returns оброблене значення
   */
  export const processItemValue = (value: number): number => {
    return value * 2 + Math.random() * 100;
  };