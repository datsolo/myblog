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
                                <h3>Datsolo Blog</h3>
                                <p><span>Đăng ký tài khoản mới để tham gia cùng chúng tôi</span></p>
                                <div className="page-links">
                                    <Link to={"/login"}>Đăng nhập</Link><Link to={"/register"} className="active">Đăng ký</Link>
                                </div>
                                <form onSubmit={(event) => this.onSubmit(event)}>
                                    <input className="form-control" type="username" name="username" placeholder="Tên đăng nhập" required onChange={(event) => this.onChange(event)} />
                                    <input className="form-control" type="password" name="password" placeholder="mật khẩu" required onChange={(event) => this.onChange(event)} />
                                    <input className="form-control" type="number" name="phone" placeholder="số điện thoại" required onChange={(event) => this.onChange(event)} />
                                    <div className="form-button">
                                        <button id="submit" type="submit" className="ibtn">Đăng ký</button>
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