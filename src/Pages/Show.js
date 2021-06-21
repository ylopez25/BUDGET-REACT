import { useState } from "react";
import { useParams } from "react-router-dom";
import BudgetDetails from "../Components/BudgetDetails";

function Show({ deleteBudget, budgets }) {
  let { index } = useParams();
  const [budget] = useState(budgets[index]);
  return (
    <div id="index">
      {/* <h2>Show</h2> */}
      <section>
        <BudgetDetails
       
          budget={budget}
          index={index}
          deleteBudget={deleteBudget}
        />
      </section>
    </div>
  );
}

export default Show;
