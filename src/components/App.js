import React, { Component } from "react";
import '../css/main.css';
import '../css/bootstrap.min.css'


class App extends Component {
    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-11 mx-auto pt-3">
                                <h3 class="text-uppercase mb-4">budget app</h3>
                                {/*BudgetForm*/}
                                <BudgetForm />

                                {/*Display*/}
                                <Display />

                                {/*ExpenseForm*/}
                                <ExpenseForm />

                                {/*ExpenseList*/}
                                <ExpenseList />
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default App;
