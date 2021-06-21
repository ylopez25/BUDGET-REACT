import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h1>
        <Link to="/budgets">Budgets</Link>
      </h1>
      <button>
        <Link to="/budgets/new">New Budget</Link>
      </button>
    </nav>
  );
}
