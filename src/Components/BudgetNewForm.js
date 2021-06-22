import { useState } from "react";
import { withRouter } from "react-router-dom";

function BudgetNewForm(props) {
  const [budget, setBudget] = useState({
    name: "",
    date: "",
    amount: "",
    from: ''
  });

  const handleTextChange = (event) => {
    setBudget({ ...budget, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBudget(budget);
    props.history.push("/budgets");
  };
  return (
    <div id='main'>
      <h1>New Budget</h1>
      <form onSubmit={handleSubmit}>
      <br />
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={budget.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name"
          required
        />
        <br />
        <br />
        <label htmlFor="amount">Amount:</label>
        <input
         id="amount"
        type="number"
        value={budget.amount}
        placeholder="$$"
        onChange={handleTextChange}
        required
        />
        <br />
        <br />
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
         value={budget.date}
          placeholder="date"
          onChange={handleTextChange}
          required
        />
        <br />
        <br />
<label htmlFor="from">From: </label>
<br />
        <textarea
        rows="4" cols="40"
          id="from"
          value={budget.from}
          onChange={handleTextChange}
          placeholder="Where this expense/income has come from"
        /> 
        <br />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default withRouter(BudgetNewForm);