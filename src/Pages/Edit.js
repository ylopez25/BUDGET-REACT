import BudgetEditForm from "../Components/BudgetEditForm";

function Edit({ updateBudget, budgets }) {
  return (
    <div id='index'>
      {/* <h2>Edit</h2> */}
      <BudgetEditForm updateBudget={updateBudget} budgets={budgets} />
    </div>
  );
}

export default Edit;