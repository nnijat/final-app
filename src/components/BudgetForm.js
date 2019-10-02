function BudgetForm(props) {
    return (
        <div class="col-md-5 my-3">
            <div class="budget-feedback alert alert-danger text-capitalize">budget feedback</div>
            <form id="budget-form" class=" budget-form">
                <h5 class="text-capitalize">please enter your budget</h5>
                <div class="form-group">
                    <input type="number" class="form-control budget-input" id="budget-input" />
                </div>

                <button type="submit" class="btn text-capitalize budget-submit"
                    id="budget-submit">calculate</button>
            </form>
        </div>
    )
}
