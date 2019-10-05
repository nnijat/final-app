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
        fetch('/users')
            .then(res => res.json())
            .then(data => this.setState({ user: data[0] }))
    }

    render() {
        console.log("I am here")
        if (this.state.user.name) {
            console.log("I am here too")
            return (
                <div className="App">
                    <header className="App-header">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 mx-auto pt-3">
                                    <h1 className="text-uppercase mb-4">budget app</h1>
                                   
                                        {/*BudgetForm*/}
                                        <BudgetForm />

                                        {/*ExpenseForm*/}
                                        <ExpenseForm
                                            user={this.state.user}
                                        />
                            
                                    {/*Display*/}
                                    <InfoBox
                                        user={this.state.user}
                                    />
                                </div>
                            </div>
                            {/*ExpenseList*/}
                            <ExpenseListForm
                                expenses={this.state.user.expenses}
                            />
                        </div>
                    </header>
                </div>
            )
        }
        else {
            console.log("it is me again, I am here")
            return "loading..."
        }
    }
}

export default App;
