import React, { memo } from 'react';
import type { ChildComponentProps } from '../../types/demo.types';

/**
 * Дочірній компонент з React.memo
 * Перерендерюється тільки при зміні пропсів
 */
const MemoizedChild: React.FC<ChildComponentProps> = memo(({ onClick, title }) => {
  console.log(`🟢 ${title} перерендерився`);
  
  return (
    <div className="p-3 border border-green-200 rounded bg-green-25">
      <p className="text-sm text-green-700 mb-2">{title}</p>
      <button 
        onClick={onClick}
        className="px-2 py-1 text-xs bg-green-400 text-white rounded hover:bg-green-500 transition-colors"
      >
        Дочірня кнопка
      </button>
    </div>
  );
});

// Встановлюємо displayName для кращого дебагінгу
MemoizedChild.displayName = 'MemoizedChild';

export default MemoizedChild;