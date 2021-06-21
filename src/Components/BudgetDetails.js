import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";
import axios from "axios";

import { apiURL } from "../util/apiURL";

const API = apiURL();

function BudgetDetails(props) {
  const { deleteBudget } = props;
  //ookup whaa is useState??
  const [budget, setBudget] = useState([]);

  let { index } = useParams();
  let history = useHistory();

  useEffect(() => {
    axios.get(`${API}/budgets/${index}`).then(
      (response) => {
        setBudget(response.data);
      },
      (error) => {
        history.push(`/not-found`);
      }
    );
  }, [index, history]);

  const handleDelete = () => {
    deleteBudget(index);
    history.push(`/budgets`);
  };

  return (
    <article id="main">
      <h3>Name : {budget.name}</h3>
      <h3>Date: {budget.date}</h3>
      <h3>Amount: {budget.amount}</h3>
      <div>
        <div>
          {" "}
          <Link to={`/budgets`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/budgets/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

//what is withrouter?
export default withRouter(BudgetDetails);
