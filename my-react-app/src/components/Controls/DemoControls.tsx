import React from 'react';
import type { DemoControlsProps } from '../../types/demo.types';

/**
 * Панель управління для демонстрації
 */
const DemoControls: React.FC<DemoControlsProps> = ({
  count,
  calculationValue,
  newItemName,
  onCountChange,
  onCalculationValueChange,
  onNewItemNameChange,
  onAddItem
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
      {/* Лічильник */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Лічильник: <span className="font-bold text-blue-600">{count}</span>
        </label>
        <button 
          onClick={onCountChange}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors w-full"
        >
          Збільшити лічильник
        </button>
        <p className="text-xs text-gray-500 mt-1">
          Змінює стан, але не впливає на мемоізовані обчислення
        </p>
      </div>

      {/* Значення для обчислень */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Значення для обчислень: <span className="font-bold text-purple-600">{calculationValue}</span>
        </label>
        <button 
          onClick={onCalculationValueChange}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors w-full"
        >
          Змінити значення
        </button>
        <p className="text-xs text-gray-500 mt-1">
          Змінює залежність useMemo - перерахунок обчислень
        </p>
      </div>

      {/* Додавання елементів */}
      <div>
        <label className="block text-sm font-medium mb-2">Додати елемент</label>
        <div className="flex gap-2 mb-1">
          <input
            type="text"
            value={newItemName}
            onChange={(e) => onNewItemNameChange(e.target.value)}
            placeholder="Назва елементу"
            className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm"
            onKeyPress={(e) => e.key === 'Enter' && onAddItem()}
          />
          <button 
            onClick={onAddItem}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm disabled:opacity-50"
            disabled={!newItemName.trim()}
          >
            Додати
          </button>
        </div>
        <p className="text-xs text-gray-500">
          Змінює список - перерахунок мемоізованого списку
        </p>
      </div>
    </div>
  );
};

export default DemoControls;