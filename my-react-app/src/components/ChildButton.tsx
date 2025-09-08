import React from 'react';

interface Props {
  onClick: () => void;
}

const ChildButton: React.FC<Props> = ({ onClick }) => {
  console.log('🔴 ChildButton перерендерився');
  return (
    <button onClick={onClick} className="px-4 py-2 bg-red-500 text-white rounded">
      Дочірня кнопка (без memo)
    </button>
  );
};

export default ChildButton;