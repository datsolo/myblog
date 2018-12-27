import React, { Component } from 'react';
import "../login/style.css";
import "../login/theme.css";
import { registerAccount } from '../../actions/AuthActions';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCookie } from '../../helper';
import Graphic3 from '../../images/graphic3.svg';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            newAccount: {
                name: "",
                email: "",
                phone: "",
                password: ""
            }
        };
    }

    onChange = (e) => {
        this.setState({
            newAccount: {
                ...this.state.newAccount,
                [e.target.name]: e.target.value
            }
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.register(this.state.newAccount).then(data => {
            this.setState({ redirectToReferrer: true });
        });
    }

    render() {

        if (this.state.redirectToReferrer === true) {
            return <Redirect to='/' />
        }

        return (
            <div className="form-body">
                <div className="row">
                    <div className="img-holder">
                        <div className="bg" />
                        <div className="info-holder">
                            <img src={Graphic3} alt="" />
                        </div>
                    </div>
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <h3>Get more things done with Loggin platform.</h3>
                                <p>Access to the most powerfull tool in the entire design and web industry.</p>
                                <div className="page-links">
                                    <Link to={"/login"}>Login</Link><Link to={"/register"} className="active">Register</Link>
                                </div>
                                <form onSubmit={(event) => this.onSubmit(event)}>
                                    <input className="form-control" type="username" name="username" placeholder="User name" required onChange={(event) => this.onChange(event)} />
                                    <input className="form-control" type="password" name="password" placeholder="Password" required onChange={(event) => this.onChange(event)} />
                                    <input className="form-control" type="number" name="phone" placeholder="Phone number" required onChange={(event) => this.onChange(event)} />
                                    <div className="form-button">
                                        <button id="submit" type="submit" className="ibtn">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        register: (newAccount) => dispatch(registerAccount(newAccount))
    }
}

export default connect(null, mapDispatchToProps)(RegisterPage);