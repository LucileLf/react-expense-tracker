import { useState } from 'react'
import './App.css'
import Form from "./components/Form"
import List from "./components/List"
import Filter from "./components/Filter"

function App() {

  //store the list items
  const [listItems, setListItems] = useState([
    {id: 1, description: "Milk", amount: 1, category: "Groceries"},
    {id: 2, description: "Electricity", amount: 90, category: "Utilities"}
  ]);

  const filterList = (category: string) => {
    console.log(category);
    //update list items
    const filteredItems = listItems.filter(item => item.category === category);
    setListItems(filteredItems);
  }
  // const handleSubmit = (data: FieldValues) => {
  //   setListItems({...listItems, ...data})
  // }

  return (
    <div className="App">
      <Form /*listItems={listItems[]} onSubmit={handleSubmit}*//>
      <div className="mb-3">
        <Filter onSelectCategory={category => filterList(category)}/>
      </div>
        <List
          listItems={listItems}
          onDelete={(id)=>setListItems(listItems.filter(e => e.id !== id))}
        />
    </div>
  )
}

export default App
