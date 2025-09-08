export const expensiveCalculation = (num: number): number => {
    console.log(`Виконується складне обчислення для ${num}`);
    let result = 0;
    for (let i = 0; i < 500000; i++) {
      result += num * i;
    }
    return result;
  };