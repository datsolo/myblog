import React, { Component } from 'react';
import './style.css';
import Avatar from "../../images/team-mann.jpg"
import Hastag from "../hastag";
import {Link} from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/vi';  
moment.locale('vi')

class Blog extends Component {


    showHastag(hastag){
        if(hastag.length < 0) {
            return null;
        }
        else return hastag.map((tag) => {
            return <Hastag key={tag._id}>#{tag.content}</Hastag>
        })
    }

    render() {

        const blog = this.props.blog;

        return (
            <div className="a-blog">
                <div className='row'>
                    <div className="col-1">
                        <img src={Avatar} alt="avt-blog" className="avatar-blog"></img>
                    </div>
                    <div className="col-9">
                        <Link to={`/blog/${blog._id}`} className="user-name">{blog.title}</Link><br/>
                        {this.showHastag(blog.hastag)}
                    </div>
                    <div className="col-2">
                        <span>{blog.like.length} </span><i className="zmdi zmdi-thumb-up" style={{color: "#b3b3b3"}}></i>
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
                        <p className="content-short-cut-blog" >{(blog.content.length > 200) ? blog.content.substr(0,199) : blog.content}...</p>
                        <p className="writer">
                            <Link to="/blog"><span>{blog.user_id.username}</span></Link> <span> viết {moment(new Date(blog.created)).fromNow()}.</span>
                        </p>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        )
    }
}

export default Blog;