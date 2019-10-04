import React from "react";

function ExpenseList() {
    return (
        <div className="col-md-7 my-3">
            <div className="expense-list" id="expense-list">
                <div className="expense-list__info d-flex justify-content-between text-capitalize">
                    <h5 className="list-item">expense title</h5>
                    <h5 className="list-item">expense value</h5>
                    <h5 className="list-item">edit</h5>
                </div>
            </div>
        </div>
    )
}

export default ExpenseList;