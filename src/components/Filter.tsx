import React from "react";
import categories from "../categories";

interface FilterProps {
  onSelectCategory: (category: string) => void;
}

const Filter = ({ onSelectCategory }: FilterProps) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="all">All categories</option>

      {categories.map((category) => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  );
};

export default Filter;
