let calculationCount = 0;

export const expensiveCalculation = (num: number): number => {
  calculationCount++;
  console.log(`🔄 Обчислення #${calculationCount} для значення ${num}`);
  let result = 0;
  for (let i = 0; i < 500000; i++) {
    result += num * i;
  }
  return result;
};

export const getCalculationCount = () => calculationCount;
export const resetCalculationCount = () => {
  calculationCount = 0;
};