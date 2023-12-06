interface ListItem {
  id:number,
  description: string;
  amount: number;
  category: string;
}

interface ListProps {
  listItems: ListItem[];
  onDelete: (id: number) => void;//callback function
}

const List = ({ listItems, onDelete }: ListProps) => {
  if (listItems.length === 0) return null;
  return (
    <div>
      {/*listItems*/}
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {listItems.map((listItem) => (
            <tr key={listItem.id}>
              <td>{listItem.description}</td>
              <td>${listItem.amount}</td>
              <td>{listItem.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(listItem.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

            <tr>
              <td>Total</td>
              <td>
                ${listItems.reduce((accumulator, listItem) =>
                  accumulator + listItem.amount, 0).toFixed(2)}
              </td>
              <td></td>
              <td></td>
            </tr>

        </tbody>
      </table>
    </div>
  );
};

export default List;
