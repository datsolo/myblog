import React, { Component } from 'react';
import "./style.css";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Blog from '../../components/blog';
import WriterInformation from '../../components/writerinformation';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAllBlog, getAllUserBlog } from '../../actions/BlogAction';
import Hastag from '../../components/hastag';
import Paginate from '../../components/paginate';

class HomePage extends Component {

    constructor(props){
        super(props);
        this.state={
            page: 1
        }
    }

    componentDidMount() {
        this.props.getAllBlog();
    }

    onChangePage = (destinationPage) => {
        this.setState({ 
                page: destinationPage,
            
        }, () => this.props.getAllBlog(this.state.page));
    }

    showBlogs(blogs) {
        if (blogs.length <= 0) {
            return <p style={{fontSize: '1.4em'}}>Không có bài viết</p>;
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
            return <Hastag key={tag._id} id={tag._id}>#{tag.content}</Hastag>
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
                            <p style={{fontSize: '1.4em'}}>Bạn sẽ nhìn thấy những bài viết mới trước</p>
                        </div>
                    </div>

                    <div className='row'>

                        <div className='col-1'></div>
                        <div className='col-7'>
                            {this.showBlogs(this.props.listBlogs)}
                            <Paginate current={this.props.current_page} pages={this.props.pages} changePage={this.onChangePage}></Paginate>
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
                                    <p className='list-tag'><i className="zmdi zmdi-tag-more"></i> <i>Chủ đề nổi bật</i></p>
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
        hastag: state.hastag.allHastag,
        current_page: state.blog.current,
        pages: state.blog.pages
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllBlog: (page) => dispatch(getAllBlog(page)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));
