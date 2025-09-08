import React, { useMemo, useCallback } from 'react';
import ListItem from './ListItem';
import { processItemValue } from '../../utils/calculations';
import type { DemoItem, ProcessedItem } from '../../types/demo.types';

interface ItemsListProps {
  items: DemoItem[];
  onDeleteItem: (id: number) => void;
}

/**
 * Контейнер для списку з мемоізацією обробки даних
 */
const ItemsList: React.FC<ItemsListProps> = ({ items, onDeleteItem }) => {
  // useMemo для обробки списку - перераховується тільки при зміні items
  const processedItems: ProcessedItem[] = useMemo(() => {
    console.log('🔄 Перерахунок списку...');
    return items.map(item => ({
      ...item,
      processedValue: processItemValue(item.value)
    }));
  }, [items]);

  // useCallback для мемоізації функції видалення
  const handleDelete = useCallback((id: number) => {
    onDeleteItem(id);
  }, [onDeleteItem]);

  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Мемоізований список</h3>
      <p className="text-sm text-gray-600 mb-4">
        Список перераховується тільки при зміні елементів, не при зміні лічильника.
      </p>
      <div className="space-y-1">
        {processedItems.map(item => (
          <ListItem 
            key={item.id}
            item={item}
            onDelete={handleDelete}
          />
        ))}
        {processedItems.length === 0 && (
          <p className="text-gray-500 text-center py-4">Список порожній</p>
        )}
      </div>
    </div>
  );
};

export default ItemsList;