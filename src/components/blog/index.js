import React, { Component } from 'react';
import './style.css';
import Avatar from "../../images/team-mann.jpg"
import Hastag from "../hastag";
import {Link} from 'react-router-dom';

class Blog extends Component {


    render() {
        return (
            <div className="a-blog">
                <div className='row'>
                    <div className="col-1">
                        <img src={Avatar} alt="avt" className="avatar"></img>
                    </div>
                    <div className="col-8">
                        <a href="#" className="user-name">Tiêu đề</a><br/>
                        <Hastag>#TIL</Hastag><Hastag>#JS</Hastag>
                    </div>
                    <div className="col-1">
                        <span>10 </span><i className="zmdi zmdi-thumb-up" style={{color: "blue"}}></i>
                    </div>
                    <div className="col-1">
                        <span>10 </span><i class="zmdi zmdi-bookmark"></i>
                    </div>
                    <div clas="col-1">
                        <span>10 </span><i class="zmdi zmdi-comments"></i>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-1"></div>
                    <div className="col-8">
                        <p className="content-short-cut-blog" >(Ảnh) 1. Tựa đề Mình vẫn còn nhớ cái hôm đấy. 
                        Trong khi mãi ngắm nhìn những dòng code đến hoa mắt là lúc mặt trời đã lặn khuất sau những toà nhà ...</p>
                        <p className="writer">
                            <Link to="/blog"><span>Tác giả</span></Link> <span> viết ... trước.</span>
                        </p>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        )
    }
}

export default Blog;