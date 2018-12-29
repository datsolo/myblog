import React, { Component } from 'react';
import './style.css';
import Avatar from '../../images/team-mann.jpg';
import { Link } from 'react-router-dom';


class WriterInformation extends Component {

    render() {

        return (
            <div className='row writer-infor'>
            <div className='col-2'></div>
                <div className='col-4'>
                    
                        <img className='avatar' src={Avatar} alt="avatar"></img>
                    
                </div>
                <div className='col-5'>
                    
                        <span className='user-name'><Link to='/'>{this.props.user.username}</Link></span><br/>
                        <span>0 bai viet</span><br/>
                    
                </div>
            </div>

        )
    }
}

export default WriterInformation;