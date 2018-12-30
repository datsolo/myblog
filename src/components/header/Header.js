import React, { Component } from 'react';
import './style.css';
import Avatar from "../../images/team-mann.jpg";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { logoutAccount } from '../../actions/AuthActions';
import Select from 'react-select';
import { creatBlog } from '../../actions/BlogAction';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: "",
            creatBlog: false,
            hastag: []
        }
        this.onSetHastag = this.onSetHastag.bind(this);
        this.change = this.change.bind(this);
        this.createBlog = this.createBlog.bind(this);
    }

    showHastag(hastags) {
        if (hastags.length > 0) {
            return hastags.map((hastag) => {
                return <a className="dropdown-item" href={`/hastag/${hastag._id}`} key={hastag._id}>#{hastag.content}</a>
            })
        }
        else return null;

    }

    logout() {
        this.props.logout();
        window.location.href = '/login';
    }

    change(e) {
        this.setState({
            ...this.state,
            keyword: e.target.value
        })
    }

    search(e) {
        e.preventDefault();
        window.location.href = `/search/${this.state.keyword}`;
    }

    openCreaterBlog() {
        this.setState({
            ...this.state,
            creatBlog: true
        })
    }

    closeCreateBlog() {
        this.setState({
            ...this.state,
            creatBlog: false
        })
    }

    createBlog(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    onSetHastag(selectedOption) {
        console.log(selectedOption);
        this.setState({
            ...this.state,
            hastag: [selectedOption.value]
        })
    }

    submit(e){
        e.preventDefault();
        let data = {
            title: this.state.title,
            hastag: this.state.hastag,
            content: this.state.content
        }
        if(data.hastag.length == 0) return alert("Bạn cần chọn Hastag cho bài viết.");
        if(data.content === "") return alert("Bài viết cần có nội dung");
        console.log(data)
        this.props.creatBlog(data);
    }

    render() {

        const user = this.props.user;
        const hastags = this.props.hastags;
        var hastagOpition = this.props.hastags.map((hastag) => {
            return { value: hastag._id, label: hastag.content }
        });

        return (

            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand logo-datsolo" href="/home">Datsolo</a>
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
                                    <a className="nav-link " href="javascript:void(0)" onClick={() => this.openCreaterBlog()}><i className="zmdi zmdi-border-color"></i> Viết bài</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-md-0" onSubmit={(event) => this.search(event)}>
                                <input className="form-control" type="text" placeholder="nhập và enter để tìm " onChange={(event) => this.change(event)} required />
                            </form>
                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img className='avatar-header mr-2' src={Avatar} alt="avatar"></img>
                                        {user.username}
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdown07">
                                        <a className="dropdown-item" href={`/user/${user._id}`}><i className="zmdi zmdi-account-circle"></i> Trang cá nhân</a>
                                        <a className="dropdown-item" href="#"><i className="zmdi zmdi-settings"></i> Cài đặt</a>
                                        <a className="dropdown-item" href="javascript:void(0)" onClick={() => this.logout()}><i className="zmdi zmdi-power"></i> Đăng xuất</a>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>

                <Modal isOpen={this.state.creatBlog} toggle={() => this.closeCreateBlog()}>
                    <ModalHeader>
                        <span>Tạo bài viết mới</span>
                    </ModalHeader>
                    <ModalBody>
                        <form className='form-group' onSubmit={(event) => this.submit(event)}>
                            <label className='title'>Tiêu đề</label>
                            <input type='text' name='title' className='form-control' placeholder="nhập tiêu đề cho bài viết của bạn..." onChange={(event) => this.createBlog(event)} required></input>
                            <label className='title'>Hastag</label>
                            <Select
                                name="hastag"
                                options={hastagOpition}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                onChange={this.onSetHastag}
                                placeholder="Chọn một trong các Hastag..."
                            />
                            <label className='title'>Nội dung</label>
                            <textarea className='form-control' name='content' type='text' rows='8' cols='250' placeholder="nhập nội dung bài viết..." onChange={(event) => this.createBlog(event)} required></textarea>
                        <button type='submit' className='btn btn-primary'>Đăng</button>
                        </form>
                    </ModalBody>
                </Modal>
            </React.Fragment>

        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.user,
        hastags: state.hastag.allHastag
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logoutAccount()),
        creatBlog: (data) => dispatch(creatBlog(data))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));