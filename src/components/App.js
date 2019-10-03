import React, { Component } from "react";
import '../css/main.css';
import '../css/bootstrap.min.css'
import BudgetForm from './BudgetForm';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import Display from './DisplayInfo';


class App extends Component {
    state = {
        user:{}
    }

    componentDidMount(){
        fetch('/users')
        .then(res=>res.json())
        .then(data=>this.setState({user:data[0]}))
    }

    objectCheck(obj){
        for(var key in obj) {
            if(!obj.hasOwnProperty(key)){
                return false;
            }
                
        }
        return true;
    }

    render() {
        if(this.objectCheck(this.state.user)){
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
                                    <Display
                                        user={this.state.user}
                                    />

                                    {/*ExpenseForm*/}
                                    <ExpenseForm 
                                        user={this.state.user}
                                    />

                                    {/*ExpenseList*/}
                                    <ExpenseList />
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            )
        }
        else{
            return "loading"
        }
    }
    
}

export default App;
