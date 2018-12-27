import React, { Component } from 'react';
import './style.css';

class Footer extends Component {

    render() {
        return (
            <footer className="page-footer font-small special-color-dark pt-4">
                <div className="container">
                    <ul className="list-unstyled list-inline text-center">
                        <li className="list-inline-item">
                            <a className="btn-floating btn-fb mx-1" href="https://www.facebook.com/nguyen.van.dat22101997" target="blank">
                                <i className="fab fa-facebook-f"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-tw mx-1" href="https://twitter.com/NguynVn88883211" target='blank'>
                                <i className="fab fa-twitter"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-gplus mx-1" href="https://plus.google.com/u/0/115044020363498204371" target="blank">
                                <i className="fab fa-google-plus-g"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-dribbble mx-1"  href="https://www.instagram.com/dat.nv2210/" target='blank' >
                                <i class="fab fa-instagram"></i>">
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-copyright text-center py-3">© 2018 Datsolo Blog: 
                    <a href="http://localhost:3006/"> datsolo.com</a>
                </div>
            </footer>
        )
    }
}

export default Footer;