import React, { Component } from 'react';
import "./style.css";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Blog from '../../components/blog';
import WriterInformation from '../../components/writerinformation';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Hastag from '../../components/hastag';
import { getAccountDetail } from '../../actions/AccountAction';
import { getBlogDetail } from '../../actions/BlogAction';
import ContentBlogDetail from '../../components/blogdetail';

class BlogDetail extends Component {

    componentDidMount() {
        this.props.getBlogDetail(this.props.match.params.id).then(res => {
            this.props.getWriter(res.user_id._id);
        })

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
                            <ContentBlogDetail blog={this.props.blog}></ContentBlogDetail>
                        </div>
                        <div className='col-3'>
                            <div className='row'>
                                <div className='col-2'></div>
                                <div className='col-10'>
                                    <div className='row icon-like-comment'>
                                        <div className='col-1'></div>
                                        <div className='col-4  ' style={{ borderRight: "0.3px solid rgba(0,0,0,0.7)" }}>
                                            <span className='icon-blog-detail'>{this.props.blog.like.length}</span><br />
                                            <i className="zmdi zmdi-thumb-up icon-blog-detail"></i>
                                        </div>
                                        <div className='col-1  '></div>
                                        <div className='col-4  '>
                                            <span className='icon-blog-detail'>{this.props.blog.like.length}</span><br />
                                            <i class="zmdi zmdi-comments icon-blog-detail"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                {/* <div className='col-2'></div> */}
                                <div className='col-12'>
                                    <WriterInformation user={this.props.writer}></WriterInformation>
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
        writer: state.account.account,
        hastag: state.hastag.allHastag,
        blog: state.blog.blogDetail

    }
}

function mapDispatchToProps(dispatch) {
    return {
        getWriter: (id) => dispatch(getAccountDetail(id)),
        getBlogDetail: (id) => dispatch(getBlogDetail(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogDetail));
