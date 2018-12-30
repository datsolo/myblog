import React, { Component } from 'react';
import './style.css';
import Avatar from "../../images/team-mann.jpg"
import Hastag from "../hastag";
import {Link} from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/vi';  
moment.locale('vi')

class ContentBlogDetail extends Component {


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
                    
                    <div className="col-12">
                        <Link to={`/blog/${blog._id}`} ><span className="title-blog-detail">{blog.title}</span></Link><br/>
                        {this.showHastag(blog.hastag)}<br/>
                        <img src={Avatar} alt="avt-blog-detail" className="avatar-blog-detail"></img><Link to="/blog"><span>{blog.user_id.username}</span></Link> <span> viết ngày {(new Date(blog.created)).toLocaleDateString()}.</span>
                        <br/>
                        <hr/>
                    </div>
                    {/* <div className="col-1">
                        <span>10 </span><i class="zmdi zmdi-bookmark"></i>
                    </div>
                    <div clas="col-1">
                        <span>10 </span><i class="zmdi zmdi-comments"></i>
                    </div> */}
                </div>
                <div className="row ">
                    <div className="col-12">
                        <p className="content-blog-detail" >{blog.content}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentBlogDetail;