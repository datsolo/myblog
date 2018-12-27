import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';


class Hastag extends Component {


    render() {
        return (
            <Link to={"/blog"}>
                <span class="badge badge-info hastag">{this.props.children}</span>
            </Link>
        )
    }
}

export default Hastag;