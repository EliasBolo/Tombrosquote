interface EditableListProps {
  title: string;
  items: string[];
  onItemsChange: (items: string[]) => void;
  placeholder: string;
}

export default function EditableList({ title, items, onItemsChange, placeholder }: EditableListProps) {
  const addItem = () => {
    onItemsChange([...items, '']);
  };

  const removeItem = (index: number) => {
    onItemsChange(items.filter((_, i) => i !== index));
  };

  const updateItem = (index: number, value: string) => {
    const newItems = [...items];
    newItems[index] = value;
    onItemsChange(newItems);
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <button
          onClick={addItem}
          className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors text-sm"
        >
          + Add Item
        </button>
      </div>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-sm text-gray-500 w-6">
              {String.fromCharCode(945 + index)})
            </span>
            <input
              type="text"
              value={item}
              onChange={(e) => updateItem(index, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-black text-gray-800"
              placeholder={placeholder}
            />
            <button
              onClick={() => removeItem(index)}
              className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition-colors text-sm"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
