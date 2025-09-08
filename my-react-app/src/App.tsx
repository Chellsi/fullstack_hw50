import React, { useState, useCallback, useMemo } from 'react';

// Імпорт компонентів
import RegularComponent from './components/RegularComponent';
import MemoizedComponent from './components/MemoizedComponent';
import ChildButton from './components/ChildButton';
import MemoizedChild from './components/MemoizedChild';
import ListItem from './components/ListItem';
import { resetCalculationCount } from './utils/calculations';

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [calculationValue, setCalculationValue] = useState(1);
  const [items, setItems] = useState([
    { id: 1, name: 'Елемент 1' },
    { id: 2, name: 'Елемент 2' },
    { id: 3, name: 'Елемент 3' }
  ]);

  // Функція БЕЗ useCallback
  const handleClickRegular = () => {
    console.log('Клік без useCallback');
  };

  // Функція З useCallback
  const handleClickMemoized = useCallback(() => {
    console.log('Клік з useCallback');
  }, []);

  // useCallback для видалення з списку
  const handleDeleteItem = useCallback((id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  // useMemo для фільтрованого списку
  const processedItems = useMemo(() => {
    console.log('🔄 Перерахунок списку');
    return items.map(item => ({
      ...item,
      processed: true
    }));
  }, [items]);

  const addItem = () => {
    const newItem = { id: Date.now(), name: `Новий елемент ${items.length + 1}` };
    setItems(prev => [...prev, newItem]);
  };

  const handleReset = () => {
    resetCalculationCount();
    setCount(0);
    setCalculationValue(1);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Демонстрація мемоізації React</h1>
      
      <div className="mb-6 p-4 bg-yellow-100 rounded">
        <p className="text-sm mb-2">Відкрийте консоль (F12) щоб бачити логи перерендерів</p>
        <p className="text-xs text-yellow-700">
          <strong>Тест:</strong> Натисніть "Лічильник" - обчислення виконається тільки для червоного блоку
        </p>
      </div>

      {/* Контролери */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <button 
          onClick={() => setCount(c => c + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Лічильник: {count}
        </button>
        <button 
          onClick={() => setCalculationValue(v => v + 1)}
          className="px-4 py-2 bg-purple-500 text-white rounded"
        >
          Значення: {calculationValue}
        </button>
        <button 
          onClick={addItem}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Додати елемент
        </button>
        <button 
          onClick={handleReset}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Скинути лічильники
        </button>
      </div>

      {/* Демонстрація useMemo */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. useMemo</h2>
        <p className="text-sm text-gray-600 mb-4">
          Змініть лічильник - червоний блок виконає обчислення, зелений - ні
        </p>
        <div className="grid grid-cols-2 gap-4">
          <RegularComponent value={calculationValue} />
          <MemoizedComponent value={calculationValue} />
        </div>
      </div>

      {/* Демонстрація useCallback + React.memo */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. useCallback + React.memo</h2>
        <p className="text-sm text-gray-600 mb-4">
          Змініть лічильник - тільки червона кнопка перерендериться
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border rounded">
            <ChildButton onClick={handleClickRegular} />
          </div>
          <div className="p-4 border rounded">
            <MemoizedChild onClick={handleClickMemoized} />
          </div>
        </div>
      </div>

      {/* Демонстрація списку */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. Мемоізований список</h2>
        <p className="text-sm text-gray-600 mb-4">
          Змініть лічильник - список не перерахується
        </p>
        <div className="border rounded p-4">
          {processedItems.map(item => (
            <ListItem 
              key={item.id}
              item={item}
              onDelete={handleDeleteItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;