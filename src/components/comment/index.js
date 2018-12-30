import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Avatar from "../../images/team-mann.jpg"


class Comment extends Component {


    render() {
        const comment = this.props.comment;
        return (
            <div className='row comment' >
                <div className='col-1'>
                    <img src={Avatar} alt="avt-comment" className="avatar-comment"></img>
                </div>
                <div className='col-10'>
                    <Link to={`/user/${comment.user_id._id}`} className='user-name-comment'>{comment.user_id.username}</Link> <span>{new Date(comment.created).toLocaleDateString()}</span> <br/>
                    <p>{comment.content}</p>
                </div>

            </div>

        )
    }
}

export default Comment;