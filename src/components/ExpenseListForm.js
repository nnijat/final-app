import React from "react";
import ExpenseList from './ExpenseList';

function ExpenseListForm(props) {
    return (
        <div className="col-md-7 my-3">
            <div className="expense-list" id="expense-list">
                <div className="expense-list__info d-flex justify-content-between text-capitalize ">
                    <h5 className="list-item">expense title</h5>
                    <h5 className="list-item">expense value</h5>
                    <h5 className="list-item">date</h5>
                    <h5 className="list-item">edit</h5>
                </div>
            </div>
            {props.expenses.map(exp =>
                <ExpenseList 
                    desc = {exp.expDesc}
                    amt = {exp.expAmt}
                />
            )}
        </div>
    )
}

export default ExpenseListForm;