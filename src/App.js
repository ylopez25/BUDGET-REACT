import { apiURL } from "./util/apiURL";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';

import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import Show from "./Pages/Show";
import './App.css'

import NavBar from './Components/NavBar';
const API = apiURL();

function App() {
const [budgets, setBudgets] = useState([]);

const addBudget = (newBudget) => {
  axios.post(`${API}/budgets`, newBudget).then((response) => {
    setBudgets([...budgets, newBudget])
  }).catch((err) => {
    console.log(err)
  })
}

const deleteBudget = (index) => {
  axios.delete(`${API}/budgets/${index}`).then((response) => {
    const updateArray = [...budgets];
    updateArray.splice(index, 1);
    setBudgets(updateArray);
    return true
  },
  (err) => console.error(err)
  )
  .catch((c) => console.warn('catch', c));
}

const updateBudget = (updatedBudget, index) => {
  axios.put(`${API}/budgets/${index}`, updatedBudget).then((response) => {
    const updateArray = [...budgets];
    updateArray[index] = updatedBudget;
    setBudgets(updateArray)
  },
  (err) => console.error(err)
  ).catch((c) => console.warn("catch", c))
}

useEffect(() => {
  axios.get(`${API}/budgets`).then((response) => {
    const {data} = response;
    setBudgets(data)
  })
}, []);
  return(
<div>
  <Router>
    <NavBar/>
    <main>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/budgets'>
          <Index budgets={budgets} />
        </Route>
        <Route path="/budgets/new">
          <New addBudget={addBudget}/>
        </Route>
        <Route exact path="/budgets/:index">
          <Show budgets={budgets} deleteBudget={deleteBudget}/>
        </Route>
        <Route path="/budgets/:index/edit">
          <Edit budgets={budgets} updateBudget={updateBudget}/>
        </Route>
        <Route path="*">
          <h1>Page not Found</h1>
        </Route>
      </Switch>
    </main>
  </Router>
</div>
  )
}

export default App;