export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={`
        ${type}
        /* Layout & Alignment */
        flex items-center justify-center px-4 h-9 min-w-[100px] select-none
        
        /* VectorShift Palette & Typography */
        text-[11px] font-sans font-medium uppercase tracking-widest
        text-vs-dark bg-white
        
        /* Border Architecture & Micro Shadow */
        border border-gray-200 rounded-sm shadow-2xs
        
        /* Drag Mechanics & States */
        cursor-grab active:cursor-grabbing
        hover:border-vs-gold hover:text-vs-gold
        transition-all duration-200 ease-in-out
      `}
      onDragStart={(event) => onDragStart(event, type)}
      draggable
    >
      <span>{label}</span>
    </div>
  );
};