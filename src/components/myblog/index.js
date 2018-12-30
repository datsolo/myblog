import React, { Component } from 'react';
import './style.css';
import Avatar from "../../images/team-mann.jpg"
import Hastag from "../hastag";
import { Link } from 'react-router-dom';
import moment from 'moment';
import { deleteBlog } from '../../actions/BlogAction';
import { connect } from 'react-redux';
import SweetAlert from 'react-bootstrap-sweetalert';

import 'moment/locale/vi';
moment.locale('vi')

class MyBlog extends Component {

    constructor(props){
        super(props);
        this.state={
            warning: false
        }
    }


    showHastag(hastag) {
        if (hastag.length < 0) {
            return null;
        }
        else return hastag.map((tag) => {
            return <Hastag key={tag._id} id={tag._id}>#{tag.content}</Hastag>
        })
    }

    onCancel(){
        this.setState({
            warning: false
        })
    }

    openAlert(id){
        if(this.props.user._id.toString() !== id.toString())
        alert("Bạn chỉ được quyền xóa bài viết của bạn!");
        else{
            this.setState({
                warning: true
            })
        }
    }


    render() {

        const blog = this.props.blog;

        return (
            <React.Fragment>
                <div className="a-blog">
                    <div className='row'>
                        <div className="col-1">
                            <img src={Avatar} alt="avt-blog" className="avatar-blog"></img>
                        </div>
                        <div className="col-8">
                            <Link to={`/blog/${blog._id}`} className="user-name">{blog.title}</Link><br />
                            {this.showHastag(blog.hastag)}
                        </div>
                        <div className="col-2">
                            <span>{blog.like.length} </span><i className="zmdi zmdi-thumb-up" style={{ color: "#b3b3b3" }}></i>
                        </div>
                        <div className='col-1'>
                            <a href="javascript:void(0)" onClick={() => this.openAlert(blog.user_id._id)}>
                                <i class="zmdi zmdi-delete"></i>
                            </a>
                        </div>
                        {/* <div className="col-1">
                        <span>10 </span><i class="zmdi zmdi-bookmark"></i>
                    </div>
                    <div clas="col-1">
                        <span>10 </span><i class="zmdi zmdi-comments"></i>
                    </div> */}
                    </div>
                    <div className="row ">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <p className="content-short-cut-blog" >{(blog.content.length > 200) ? blog.content.substr(0, 199) : blog.content}...</p>
                            <p className="writer">
                                <Link to={`/user/${blog.user_id._id}`}><span>{blog.user_id.username}</span></Link> <span> viết {moment(new Date(blog.created)).fromNow()}.</span>
                            </p>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>

                <div className="sweet-alert-wrapper">
                    <SweetAlert
                        warning
                        btnSize="sm"
                        show={this.state.warning}
                        showCancel
                        confirmBtnText="Yes, delete it!"
                        confirmBtnBsStyle="danger"
                        cancelBtnBsStyle="success"
                        title="Bạn có chắc muốn xóa bài viết?"
                        onConfirm={() => this.props.deleteBlog(blog._id)}
                        onCancel={() => this.onCancel()}
                    >
                        Bạn sẽ không thể khôi phục bài viết!
                    </SweetAlert>
                </div>
            </React.Fragment>

        )
    }
}

function mapStateToProps(state){
    return{
        user: state.auth.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteBlog: (id) => dispatch(deleteBlog(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyBlog);