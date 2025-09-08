import React, { memo } from 'react';

interface Props {
  item: { id: number; name: string };
  onDelete: (id: number) => void;
}

const ListItem: React.FC<Props> = memo(({ item, onDelete }) => {
  console.log(`🟡 ListItem ${item.id} перерендерився`);
  return (
    <div className="flex justify-between items-center p-2 bg-gray-100 rounded mb-2">
      <span>{item.name}</span>
      <button 
        onClick={() => onDelete(item.id)}
        className="px-2 py-1 bg-red-400 text-white rounded text-sm"
      >
        Видалити
      </button>
    </div>
  );
});

ListItem.displayName = 'ListItem';

export default ListItem;