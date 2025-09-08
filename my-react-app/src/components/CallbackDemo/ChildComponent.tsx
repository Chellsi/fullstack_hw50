import React from 'react';
import type { ChildComponentProps } from '../../types/demo.types';

/**
 * Дочірній компонент без React.memo
 * Перерендерюється при кожній зміні батьківського компонента
 */
const ChildComponent: React.FC<ChildComponentProps> = ({ onClick, title }) => {
  console.log(`🔴 ${title} перерендерився`);
  
  return (
    <div className="p-3 border border-red-200 rounded bg-red-25">
      <p className="text-sm text-red-700 mb-2">{title}</p>
      <button 
        onClick={onClick}
        className="px-2 py-1 text-xs bg-red-400 text-white rounded hover:bg-red-500 transition-colors"
      >
        Дочірня кнопка
      </button>
    </div>
  );
};

export default ChildComponent;