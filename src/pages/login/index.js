import React, { Component } from 'react';
import "./style.css";
import "./theme.css";
import { Link } from 'react-router-dom';
import { loginAccount } from '../../actions/AuthActions';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { getCookie } from '../../helper';
import Graphic3 from '../../images/graphic3.svg';


class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            loginData: {
                username: "",
                password: ""
            }
        };
    }

    onChange = (e) => {
        this.setState({
            loginData: {
                ...this.state.loginData,
                [e.target.name]: e.target.value
            }
        });
    };

    login = (e) => {
        e.preventDefault();
        let login = this.state.loginData;
        this.props.userLogin(login).then((data) => {
            this.setState({ redirectToReferrer: true });
        });

    }

    render() {
        if (this.state.redirectToReferrer) {
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
                                <Link to={"/login"} className="active">Login</Link><Link to={"/register"} >Register</Link>
                                </div>
                                <form>
                                    <input className="form-control" type="text" name="username" placeholder="E-mail Address" required />
                                    <input className="form-control" type="password" name="password" placeholder="Password" required />
                                    <div className="form-button">
                                        <button id="submit" type="submit" className="ibtn">Login</button> <a href="forget7.html">Forget password?</a>
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

function mapStateToProps(state) {
    return {
        redirectToReferrer: state.auth.redirectToReferrer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userLogin: (login) => dispatch(loginAccount(login))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));