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
            <div className="col-md-5 my-3">
                <div className="expense-feedback alert alert-danger text-capitalize">expense feedback</div>
                <form id="expense-form" className=" expense-form" onSubmit={this.handleSubmit}>
                    <h5 className="text-capitalize">please enter your expense</h5>
                    <div className="form-group">
                        <input type="text" className="form-control expense-input" id="expense-input" onChange={(e) => {
                            this.setState({ newExpenseDesc: e.target.value })
                        }} />
                    </div>
                    <h5 className="text-capitalize">please enter expense amount</h5>
                    <div className="form-group">
                        <input type="number" className="form-control expense-input" id="amount-input" onChange={(e) => {
                            this.setState({ newExpenseAmt: e.target.value })
                        }} />
                    </div>
                    <button type="submit" className="btn text-capitalize expense-submit" id="expense-submit">add
                                    expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;