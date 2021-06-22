import Budget from "./Budget";

function Budgets({ budgets }) {
  return (
    <div>
      <section>
                {budgets.map((budget, index) => {
                  return <Budget key={index} budget={budget} index={index} />;
                })}
      </section>
    </div>
  );
}

export default Budgets;
