import React, {Component} from 'react';


class BudgetForm extends Component {
    state = {
        user: {}
    }

    componentDidMount(){
        fetch('/users')
        .then(res=> res.json())
        .then(data=>this.setState({user: data[0]}))
    }
    handleSubmit = (e) =>{
        fetch('/users', {
            method:"PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(this.state.user)
        })
    }


    render(){
        

        return (
            <div className="col-md-5 my-3">
                <div className="budget-feedback alert alert-danger text-capitalize">budget feedback</div>
                <form id="budget-form" class=" budget-form" onSubmit={this.handleSubmit}>
                    <h5 className="text-capitalize">please enter your budget</h5>
                    <div className="form-group">
                        <input type="number" className="form-control budget-input" id="budget-input" onChange={(e)=>{
                            console.log(Number(e.target.value))
                            this.setState({user: {...this.state.user, budget: Number(e.target.value)}})
                        }}/>
                    </div>
                    <button type="submit" className="btn text-capitalize budget-submit"
                        id="budget-submit">calculate</button>
                </form>
            </div>
        )
    }
}
export default BudgetForm;