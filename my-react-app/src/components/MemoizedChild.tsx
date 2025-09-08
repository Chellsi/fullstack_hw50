import React, { memo } from 'react';

interface Props {
  onClick: () => void;
}

const MemoizedChild: React.FC<Props> = memo(({ onClick }) => {
  console.log('🟢 MemoizedChild перерендерився');
  return (
    <button onClick={onClick} className="px-4 py-2 bg-green-500 text-white rounded">
      Дочірня кнопка (з memo)
    </button>
  );
});

MemoizedChild.displayName = 'MemoizedChild';

export default MemoizedChild;