import React, {Component} from 'react';

let emptyUser = {
    username: "",
    password: ""
}

class SignUp extends Component{
    state = {newUser: emptyUser};

    handleSubmit = (e) =>{
        fetch('/users', {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(this.state.newUser)
        })
        this.setState({newUser: emptyUser})
      }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Choose a username:
                    </label>
                        <input type="text" onChange={(e)=>{
                            this.setState({newUser: {...this.state.newUser, username: e.target.value}})
                        }} />
                    <label>
                        Choose a password:
                    </label>
                        <input type="text" onChange={(e)=>{
                            this.setState({newUser: {...this.state.newUser, password: e.target.value}})
                        }} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default EnterCoaches;

