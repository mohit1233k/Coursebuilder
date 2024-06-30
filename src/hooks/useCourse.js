import { useDrag, useDrop } from 'react-dnd';

export const useDraggable = (item) => {
  const [, ref] = useDrag({
    type: item.type,
    item: { ...item }
  });
  return ref;
};

export const useDroppable = (acceptType, onDrop) => {
  const [, ref] = useDrop({
    accept: acceptType,
    drop: onDrop
  });
  return ref;
};
