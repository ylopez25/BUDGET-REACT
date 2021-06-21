import BudgetNewForm from "../Components/BudgetNewForm";

function New({ addBudget }) {
  return (
    <div id='index'>
      {/* <h2>New</h2> */}
      <BudgetNewForm addBudget={addBudget} />
    </div>
  );
}

export default New;