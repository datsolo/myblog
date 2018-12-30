import React, { Component } from 'react';
import './style.css';
import Avatar from "../../images/team-mann.jpg";
import { connect } from 'react-redux';
import { Redirect, withRouter, Link } from 'react-router-dom';
import { getHastag } from '../../actions/HastagAction';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class Header extends Component {

    

    showHastag(hastags) {
        if(hastags.length > 0) {
          return  hastags.map((hastag) => {
              return <a className="dropdown-item" href="#" key={hastag._id}>#{hastag.content}</a>
          })
        }
        else return null;
        
    }

    render() {

        const user = this.props.user;
        const hastags = this.props.hastags;
        

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand logo-datsolo"  href="/home">Datsolo</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample07">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item ">
                                <a className="nav-link" href="/home"><i className="zmdi zmdi-home"></i> Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="javascript:void(0)" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="zmdi zmdi-menu"></i> Menu</a>
                                <div className="dropdown-menu" aria-labelledby="dropdown07">
                                    {/* <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a> */}
                                    {this.showHastag(hastags)}
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#"><i className="zmdi zmdi-border-color"></i> Viết bài</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-md-0">
                            <input className="form-control" type="text" placeholder="nhập và enter để tìm "  />
                        </form>
                        <ul className="navbar-nav ml-auto">
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className='avatar-header mr-2' src={Avatar} alt="avatar"></img> 
                                {user.username}
                                </a>
                                <div className="dropdown-menu" aria-labelledby="dropdown07">
                                    <a className="dropdown-item" href="#"><i className="zmdi zmdi-account-circle"></i> Trang cá nhân</a>
                                    <a className="dropdown-item" href="#"><i className="zmdi zmdi-settings"></i> Cài đặt</a>
                                    <a className="dropdown-item" href="#"><i className="zmdi zmdi-power"></i> Đăng xuất</a>
                                </div>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.user,
        hastags: state.hastag.allHastag
    }
}

function mapDispatchToProps(dispatch){
    return {
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));