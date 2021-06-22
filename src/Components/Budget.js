import { Link } from "react-router-dom";

function Budget({ budget, index }) {
  return (
    <div>
      <table id="main">
        <th>Date: {budget.date}</th>
        <th>Name: {budget.name}</th>
        <th>Amount: ${budget.amount}</th>
        <button>
          <Link to={`/budgets/${index}`}>EDIT</Link>
        </button>
      </table>
    </div>
  );
}
export default Budget;
