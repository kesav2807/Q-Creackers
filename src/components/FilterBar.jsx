export default function FilterBar({ selectedCategory, selectedType, onCategoryChange, onTypeChange, categories, types }) {
  return (
    <div className="filter-bar">
      <div className="filter-section">
        <label>Category:</label>
        <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
          <option value="All">All</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      
      <div className="filter-section">
        <label>Type:</label>
        <select value={selectedType} onChange={(e) => onTypeChange(e.target.value)}>
          <option value="All">All</option>
          {types.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
