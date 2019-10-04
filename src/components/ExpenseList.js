import React from "react";

function ExpenseList() {
    return (
        <div className="expense">
            <div className="expense-item d-flex justify-content-between align-items-baseline">
              {props.expenses.map(exp=>{
                return (
                  <div className = "row">
                    <h6 className=" col expense-title mb-0 text-uppercase list-item">{exp.expDesc}</h6>
                    <h5 className="col expense-amount mb-0 list-item">{exp.expAmt}</h5>
                    <h5 className="col expense-amount mb-0 list-item">09/30/2019</h5>
                  </div>
                )
              })}

                
                <h6 class="expense-title mb-0 text-uppercase list-item">best buy</h6>
                <h5 class="expense-amount mb-0 list-item">$ 300</h5>
                
                <div class="expense-icons list-item">
                    <a href="#" class="edit-icon mx-2" data-id="1">
                        <i class="fas fa-edit"></i>
                    </a>
                    <a href="#" class="delete-icon" data-id="1">
                        <i class="fas fa-trash"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ExpenseList;