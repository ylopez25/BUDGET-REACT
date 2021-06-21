import { Link } from "react-router-dom";

function Budget({ budget, index }) {
  return (
    <div>
      <table id="main">
        <th>
          Date: {budget.date}
        </th>
        <th> </th>
        <th>
          Name: {budget.name}
        </th>
        <th> </th>
        <th>
          Amount: ${budget.amount}
        </th>
        <h1> </h1>
        <td>
          <button>
            <Link to={`/budgets/${index}`}>EDIT</Link>
          </button>
        </td>
      </table>
    </div>
  );
}
export default Budget;
