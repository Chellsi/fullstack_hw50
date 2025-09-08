import React, { memo } from 'react';
import type { ListItemProps } from '../../types/demo.types';

/**
 * Мемоізований елемент списку
 * Перерендерюється тільки при зміні конкретного елементу
 */
const ListItem: React.FC<ListItemProps> = memo(({ item, onDelete }) => {
  console.log(`🟡 ListItem ${item.id} перерендерився`);
  
  return (
    <div className="flex justify-between items-center p-2 bg-gray-50 rounded mb-1">
      <span className="text-sm">
        {item.name} - Значення: {item.value} - Оброблено: {item.processedValue.toFixed(2)}
      </span>
      <button 
        onClick={() => onDelete(item.id)}
        className="px-2 py-1 text-xs bg-red-400 text-white rounded hover:bg-red-500 transition-colors"
      >
        Видалити
      </button>
    </div>
  );
});

ListItem.displayName = 'ListItem';

export default ListItem;