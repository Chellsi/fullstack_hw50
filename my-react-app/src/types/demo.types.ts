export interface DemoItem {
    id: number;
    name: string;
    value: number;
  }
  
  export interface ProcessedItem extends DemoItem {
    processedValue: number;
  }
  
  export interface ExpensiveComponentProps {
    value: number;
    onButtonClick: () => void;
  }
  
  export interface ChildComponentProps {
    onClick: () => void;
    title: string;
  }
  
  export interface ListItemProps {
    item: ProcessedItem;
    onDelete: (id: number) => void;
  }
  
  export interface DemoControlsProps {
    count: number;
    calculationValue: number;
    newItemName: string;
    onCountChange: () => void;
    onCalculationValueChange: () => void;
    onNewItemNameChange: (name: string) => void;
    onAddItem: () => void;
  }