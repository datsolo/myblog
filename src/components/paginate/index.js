import React, { Component } from 'react';

class Paginate extends Component {

    render() {
        const {current, pages} = this.props;

        if(pages) {
            var i = (current > 5) ? (current - 4) : 1;
            var arr_list = [];
            for (let j = i; j <= (current + 4) && j <= pages; j++) {
                if (j == current) arr_list.push({class: "page-item active", content: j, href: '#'});
                else if (j == current + 4 && j <= pages) arr_list.push({class: "page-item disabled", content: '...', href: '#'}); 
                else arr_list.push({class: "page-item", content: j}); 
            }
            if (pages > 0) {
                return (
                    <ul className="pagination text-center">
                        {
                            (current == 1) ? <li className="page-item disabled"><a className='page-link'>First</a></li>
                                : <li className='page-item'><a className='page-link' onClick={()=>this.props.changePage(1)}>First</a></li> 
                        }
                        {
                            (i !== 1) ? <li className="page-link disabled"><a>...</a></li>
                                : null
                        }
                        {
                            arr_list.map((item, index) => {
                                return (
                                    <li key={index} className={item.class}><a className='page-link' onClick={()=>this.props.changePage(item.content)}>{item.content}</a></li>
                                )
                            })
                        }
                        {
                            (current == pages) ? <li className="page-item disabled"><a className='page-link'>Last</a></li>
                                : <li className='page-item'><a onClick={()=>this.props.changePage(pages)} className='page-link'>Last</a></li>
                        }
                    </ul>
                )
            } else return null;
        } else return null;
    }
}

export default Paginate;