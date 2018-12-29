import React, { Component } from 'react';
import "./style.css";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Blog from '../../components/blog';
import WriterInformation from '../../components/writerinformation';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAllBlog } from '../../actions/BlogAction';
import Hastag from '../../components/hastag';

class HomePage extends Component {

    componentDidMount() {
        this.props.getAllBlog();
    }

    showBlogs(blogs) {
        if (blogs.length < 0) {
            return null;
        }
        else return blogs.map((blog) => {
            return <Blog key={blog._id} blog={blog}></Blog>
        })
    }

    showHastag(hastag) {
        if (hastag.length < 0) {
            return null;
        }
        else return hastag.map((tag) => {
            return <Hastag key={tag._id}>#{tag.content}</Hastag>
        })
    }

    render() {


        return (
            <React.Fragment>
                <Header></Header>
                <div className='content'>
                    <div className='row'>
                    <div className='col-1'></div>
                        <div className='col-7'>
                            {this.showBlogs(this.props.listBlogs)}
                        </div>
                        <div className='col-3'>
                            <div className='row'>
                                {/* <div className='col-2'></div> */}
                                <div className='col-12'>
                                    <WriterInformation user={this.props.user}></WriterInformation>
                                </div>
                            </div>
                            <div className='row '>
                            <div className='col-2'></div>
                                <div className='col-10 chude'>
                                    <p className='list-tag'><i class="zmdi zmdi-tag-more"></i> <i>Chủ đề nổi bật</i></p>
                                    {this.showHastag(this.props.hastag)}
                                </div>
                            </div>

                        </div>
                        <div className='col-1'></div>
                    </div>
                </div>
                <Footer></Footer>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        listBlogs: state.blog.blogs,
        user: state.auth.user,
        hastag: state.hastag.allHastag
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllBlog: () => dispatch(getAllBlog())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));
