import React, { Component } from 'react';
import './style.css';


class Hastag extends Component {


    render() {
        return (
            <a href={`/hastag/${this.props.id}`}>
                <span className="badge badge-info hastag">{this.props.children}</span>
            </a>
        )
    }
}

export default Hastag;