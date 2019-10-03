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
            <div className="card" id="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">hello</h5>
                    <h6 className="card-subtitle mb-2 text-muted">howdy</h6>
                    <p className="card-text">SCHEDULE</p>
                    <a href="#" className="card-link" data-toggle = "modal" data-target="#editModal">edit</a>
                    <button type="button" className="btn btn-secondary" data-container="#card" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                    Schedule
                    </button>
                    <div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="editModalTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="editModalTitle">EDIT</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                YO
                                <div className = "form-group">
                                <label htmlFor="teamName">Please Enter Your Budget</label>
                                <input type ="Number" id="budget-input" onChange={(e)=>{
                                    console.log(Number(e.target.value))
                                    this.setState({user: {...this.state.user, budget: Number(e.target.value)}})
                                }}/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" data-dismiss="modal" onClick = {this.handleSubmit}>Save changes</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BudgetForm;