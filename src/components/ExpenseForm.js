function ExpenseForm() {
    return (
        <div class="col-md-5 my-3">

            <div class="expense-feedback alert alert-danger text-capitalize">expense feedback</div>

            <form id="expense-form" class=" expense-form">
                <h5 class="text-capitalize">please enter your expense</h5>
                <div class="form-group">
                    <input type="text" class="form-control expense-input" id="expense-input" />
                </div>
                <h5 class="text-capitalize">please enter expense amount</h5>
                <div class="form-group">
                    <input type="number" class="form-control expense-input" id="amount-input" />
                </div>
                <button type="submit" class="btn text-capitalize expense-submit" id="expense-submit">add
                                expense</button>
            </form>
        </div>
    )
}