import Budgets from '../Components/Budgets';

function Index({ budgets }) {
    return (
        <div id='index'>
            {/* <h2>Index</h2> */}
            <h1>Account Total :  </h1>
            <Budgets budgets={budgets}/>
        </div>
    )
}
export default Index;