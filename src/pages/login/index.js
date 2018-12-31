import React, { Component } from 'react';
import "./style.css";
import "./theme.css";
import { Link } from 'react-router-dom';
import { loginAccount } from '../../actions/AuthActions';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
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

    // componentDidMount(){
    //     if(getCookie('session_id')) {
    //         removeCookie('session_id');
    //     }
    // }

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
        this.props.userLogin(this.state.loginData.username, this.state.loginData.password ).then((data) => {
            this.setState({ redirectToReferrer: true });
        });

    }

    render() {
        if (this.state.redirectToReferrer) {
            return <Redirect to='/' />
        }

        return (
            <React.Fragment>
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
                                    <p><span>Đăng nhập để tham gia cộng đồng chia sẻ kiến thức và cuộc sống của lập trình viên</span></p>
                                    <div className="page-links">
                                        <Link to={"/login"} className="active">Đăng nhập</Link><Link to={"/register"} >Đăng ký</Link>
                                    </div>
                                    <form onSubmit={(event) => this.login(event)}>
                                        <input className="form-control" type="text" name="username" placeholder="Tên đăng nhập" required onChange={(event) => this.onChange(event)}/>
                                        <input className="form-control" type="password" name="password" placeholder="Mật khẩu" required  onChange={(event) => this.onChange(event)}/>
                                        <div className="form-button">
                                            <button id="submit" type="submit" className="ibtn">Đăng nhập</button> 
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userLogin: (username, password) => dispatch(loginAccount(username, password))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(LoginPage));