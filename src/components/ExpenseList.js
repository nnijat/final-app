import React from "react";

function ExpenseList() {
    return (
        <div class="col-md-7 my-3">
            <div class="expense-list" id="expense-list">
                <div class="expense-list__info d-flex justify-content-between text-capitalize">
                    <h5 class="list-item">expense title</h5>
                    <h5 class="list-item">expense value</h5>
                    <h5 class="list-item"></h5>
                </div>
            </div>
        </div>
    )
}

export default ExpenseList;