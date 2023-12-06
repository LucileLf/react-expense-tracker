import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import Filter from "./components/Filter";
import categories from "./categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  //store the list items
  const [listItems, setListItems] = useState([
    { id: 1, description: "Milk", amount: 1, category: "Groceries" },
    { id: 2, description: "Electricity", amount: 90, category: "Utilities" },
  ]);

  const filterList = (category: string) => {
    console.log(category);
    //update list items
    const filteredItems = listItems.filter(
      (item) => item.category === category
    );
    setListItems(filteredItems);
  };

  const visibleList = selectedCategory // list after filter
    ? listItems.filter((e) => e.category === selectedCategory)
    : listItems;

  return (
    <div className="App">
      <div className="mb-5">
        <Form
          /*listItems={listItems[]}*/ onSubmit={(newItem) =>
            setListItems([
              ...listItems,
              { ...newItem, id: listItems.length + 1 },
            ])
          }
        />
      </div>
      <div className="mb-3">
        <Filter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <List
        listItems={visibleList}
        onDelete={(id) => setListItems(listItems.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
