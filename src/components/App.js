import React, { Component } from "react";
import '../css/main.css';
import '../css/bootstrap.min.css'
import BudgetForm from './BudgetForm';
import CurrencyForm from './CurrencyForm'
import ExpenseForm from './ExpenseForm';
import ExpenseListForm from './ExpenseListForm';
import InfoBox from './InfoBox';

import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
    state = {
        user: {}
    }

    componentDidMount() {
        fetch('users')
            .then(res => res.json())
            .then(data => this.setState({ user: data[0] }))
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-11 mx-auto pt-3">
                                <h1 className="text-uppercase mb-4">budget app</h1>
                                {/*BudgetForm*/}
                                <BudgetForm />

                                {/*Display*/}
                                <InfoBox
                                    user={this.state.user}
                                />

                                {/*ExpenseForm*/}
                                <ExpenseForm
                                    user={this.state.user}
                                />

                                {/*ExpenseList*/}
                                <CurrencyForm />
                            </div>
                        </div>
                        {/*ExpenseList*/}
                        <ExpenseListForm />
                    </div>
                </header>
            </div>
        )
    }
}

export default App;
