import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {getListData} from '../actions/index'

class List extends React.Component {
    componentDidMount(){
        this.props.getListData();
    }
    render(){
        console.log('List Props:', this.props)
        const { list } = this.props
        const listElements = list.map(item=>{
            return <li key={item._id} className="collection-item">{item.title}</li>
        })
        return(
            <div>
                <h1 className="center">To Do List</h1>
                <div className="row">
                    <div className="col s12 right-align">
                        <Link className="btn blue-gray darken-1" to="/add">Add Item</Link>
                    </div>
                </div>
                <ul className="collection">
                    {listElements}
                </ul>
            </div>

        )
    }
}

function mapStateToProps(state){
    return {
        list: state.list.all
    }
}

export default connect(mapStateToProps, {getListData})(List)
