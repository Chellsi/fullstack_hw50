// src/App.tsx
import React, { useState, useCallback } from 'react';

// Компоненти
import ExpensiveComponent from './components/ExpensiveCalculation/ExpensiveComponent';
import MemoizedExpensive from './components/ExpensiveCalculation/MemoizedExpensive';
import ChildComponent from './components/CallbackDemo/ChildComponent';
import MemoizedChild from './components/CallbackDemo/MemoizedChild';
import ItemsList from './components/ListDemo/ItemsList';
import DemoControls from './components/Controls/DemoControls';
import Section from './components/Layout/Section';

// Типи
import type { DemoItem } from './types/demo.types';

// Хуки
import { useExpensiveCalculation } from './hooks/useExpensiveCalculation';

/**
 * Головний компонент додатку з демонстрацією мемоізації
 */
const App: React.FC = () => {
  // Стан додатку
  const [count, setCount] = useState<number>(0);
  const [calculationValue, setCalculationValue] = useState<number>(1);
  const [items, setItems] = useState<DemoItem[]>([
    { id: 1, name: 'Елемент 1', value: 10 },
    { id: 2, name: 'Елемент 2', value: 20 },
    { id: 3, name: 'Елемент 3', value: 30 },
  ]);
  const [newItemName, setNewItemName] = useState<string>('');

  // Демонстрація кастомного хуку з мемоізацією
  const customHookResult = useExpensiveCalculation(calculationValue);

  // Функція без useCallback - створюється нова на кожному рендері
  const handleButtonClickWithoutCallback = () => {
    console.log('Натиснута кнопка без useCallback');
  };

  // Функція з useCallback - мемоізується
  const handleButtonClickWithCallback = useCallback(() => {
    console.log('Натиснута кнопка з useCallback');
  }, []);

  // useCallback для функції видалення елементів списку
  const handleDeleteItem = useCallback((id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  // Функція додавання нового елементу
  const handleAddItem = useCallback(() => {
    if (newItemName.trim()) {
      const newItem: DemoItem = {
        id: Date.now(),
        name: newItemName,
        value: Math.floor(Math.random() * 100)
      };
      setItems(prev => [...prev, newItem]);
      setNewItemName('');
    }
  }, [newItemName]);

  // Обробники подій для контролерів
  const handleCountChange = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  const handleCalculationValueChange = useCallback(() => {
    setCalculationValue(v => v + 1);
  }, []);

  const handleNewItemNameChange = useCallback((name: string) => {
    setNewItemName(name);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white min-h-screen">
      {/* Заголовок */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Демонстрація мемоізації в React
        </h1>
        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-800 mb-2">
            <strong>Інструкції:</strong> Відкрийте консоль розробника (F12), щоб побачити логи перерендерів та обчислень.
          </p>
          <p className="text-blue-700 text-sm">
            Результат кастомного хуку: <span className="font-mono">{customHookResult}</span>
          </p>
        </div>
      </div>

      {/* Контролери */}
      <DemoControls
        count={count}
        calculationValue={calculationValue}
        newItemName={newItemName}
        onCountChange={handleCountChange}
        onCalculationValueChange={handleCalculationValueChange}
        onNewItemNameChange={handleNewItemNameChange}
        onAddItem={handleAddItem}
      />

      {/* Демонстрація useMemo */}
      <Section
        title="1. Демонстрація useMemo"
        description="Змініть лічильник - компонент з useMemo не перераховуватиме складне обчислення."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ExpensiveComponent 
            value={calculationValue} 
            onButtonClick={handleButtonClickWithoutCallback}
          />
          <MemoizedExpensive 
            value={calculationValue} 
            onButtonClick={handleButtonClickWithCallback}
          />
        </div>
      </Section>

      {/* Демонстрація useCallback + React.memo */}
      <Section
        title="2. Демонстрація useCallback + React.memo"
        description="Змініть лічильник - мемоізований дочірній компонент не перерендериться."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Без мемоізації</h3>
            <ChildComponent 
              onClick={handleButtonClickWithoutCallback}
              title="Дочірній компонент без memo"
            />
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">З мемоізацією</h3>
            <MemoizedChild 
              onClick={handleButtonClickWithCallback}
              title="Дочірній компонент з memo"
            />
          </div>
        </div>
      </Section>

      {/* Демонстрація мемоізованого списку */}
      <Section
        title="3. Мемоізований список"
        description="Список перераховується тільки при зміні елементів, не при зміні лічильника."
      >
        <ItemsList 
          items={items}
          onDeleteItem={handleDeleteItem}
        />
      </Section>

      {/* Пояснення */}
      <div className="p-6 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Пояснення технік мемоізації:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="p-4 bg-white rounded border-l-4 border-blue-500">
            <h3 className="font-semibold text-blue-800 mb-2">useMemo</h3>
            <p className="text-gray-700">
              Мемоізує результат складних обчислень. Перераховує тільки при зміні залежностей.
            </p>
            <code className="text-xs bg-gray-100 p-1 rounded mt-2 block">
              useMemo(() => calculation(), [deps])
            </code>
          </div>
          <div className="p-4 bg-white rounded border-l-4 border-green-500">
            <h3 className="font-semibold text-green-800 mb-2">useCallback</h3>
            <p className="text-gray-700">
              Мемоізує функції. Повертає ту саму функцію, якщо залежності не змінилися.
            </p>
            <code className="text-xs bg-gray-100 p-1 rounded mt-2 block">
              useCallback(() => handler(), [deps])
            </code>
          </div>
          <div className="p-4 bg-white rounded border-l-4 border-purple-500">
            <h3 className="font-semibold text-purple-800 mb-2">React.memo</h3>
            <p className="text-gray-700">
              Мемоізує компонент. Перерендерює тільки при зміні пропсів.
            </p>
            <code className="text-xs bg-gray-100 p-1 rounded mt-2 block">
              memo(Component)
            </code>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
          <h3 className="font-semibold text-yellow-800 mb-2">💡 Поради з оптимізації:</h3>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Використовуйте мемоізацію тільки для дорогих операцій</li>
            <li>• React.memo краще використовувати для компонентів з частими ререндерами</li>
            <li>• useCallback корисний при передачі функцій до мемоізованих компонентів</li>
            <li>• Кастомні хуки можуть інкапсулювати логіку мемоізації</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;