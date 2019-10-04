import React, { Component } from "react";

class ExpenseForm extends Component {

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(data => this.setState({ user: data[0] }))
    }

    handleSubmit = (e) => {
        let expAmtStr = this.state.newExpenseAmt
        let expAmtNum = Number(expAmtStr)
        let newExpObj = {
            expDesc: this.state.newExpenseDesc,
            expAmt: expAmtNum
        }
        let user = this.state.user
        user.expenses.push(newExpObj)
        fetch('/users', {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
        this.setState({ newExpenseDesc: "" })
        this.setState({ newExpenseAmt: 0 })
    }

    render() {
        return (


            <div className="card" id="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <a href="#" className="expense-card-link" data-toggle="modal" data-target="#addExpenseModal">Add Expense</a>
                    <div className="modal fade" id="addExpenseModal" tabIndex="-1" role="dialog" aria-labelledby="editModalTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="teamName" className="budget-label">please enter your expense :  </label>
                                        <input type="text" id="expense-input" onChange={(e) => {
                                            this.setState({ newExpenseDesc: e.target.value })
                                        }} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="teamName" className="budget-label">please enter your expense amount :  </label>
                                        <input type="number" id="amount-input" onChange={(e) => {
                                            this.setState({ newExpenseAmt: e.target.value })
                                        }} />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary" data-dismiss="modal" onClick={this.handleSubmit}>Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExpenseForm;