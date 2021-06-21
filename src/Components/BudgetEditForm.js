import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';

import { apiURL } from "../util/apiURL";

const API = apiURL();



function BudgetEditForm(props) {
  let { index } = useParams();
  let history = useHistory();


  useEffect(() => {
    axios.get(`${API}/budgets/${index}`).then(
      (response) => setBudget(response.data),
      (error) => history.push(`/not-found`)
    );
      // (error) => history.push(`/not-found`)
    //);
  }, [index, history]);
  


  const [budget, setBudget] = useState({
    name: "",
    date:'',
    amount:"",
  });

  const handleTextChange = (event) => {
    setBudget({ ...budget, [event.target.id]: event.target.value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateBudget(budget, index);
    history.push(`/budgets/${index}`);
  };
  return (
    <div id='main'>
      <h1>Edit : {budget.name}</h1>
       <form onSubmit={handleSubmit}>
         <br />
        <label htmlFor="name">Name:</label> 
        <input
          id="name"
          value={budget.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Website"
          required
        /> 
        <br />
        <br />
         <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          required
          value={budget.date}
          placeholder="date"
          onChange={handleTextChange}
        />
        <br />
        <br />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
        //   name="category"
         value={budget.amount}
          placeholder="$$"
          onChange={handleTextChange}
        /> 
         <br />
         <br />

        {/* <input type="submit" 
        onChange={handleTextChange}/> */}
        <button onSubmit={handleSubmit}>Submit</button>
        <br />
        <br />
      <Link to={`/budgets/${index}`}>
        <button>Nevermind!</button>
      </Link>
      <br />
      <br />
      </form> 
    </div>
  );
}

export default BudgetEditForm;
