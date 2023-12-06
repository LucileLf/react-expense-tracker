import React from 'react'

interface FilterProps {
  onSelectCategory: (category: string) => void;
}

const Filter = ({onSelectCategory}: FilterProps) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
          <option value="all">All categories</option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
    </select>
  )
}

export default Filter
