import React from 'react';


//header and login form.
class LoginForm extends React.Component {
    render() {
        return (
            <div className="wholeLoginForm">
                <h3 className="headerName">Login Here.
                </h3>
                    <form>
                        <label>
                        User Name:
                        <input  className="formBox" type="text" name="userName" placeholder="User Name" />
                        </label>
                        <br>
                        </br>
                        <label>Password:
                        <input className="formBox" type="text" name="password" placeholder="Password"></input>
                        </label>
                        <br>
                        </br>
                        <input type="submit" value="Submit" />
                    </form>
                
            </div>
        )
    }
}

export default LoginForm