import React from 'react';
import FormatTime from './format_time'
import { connect } from 'react-redux';
import {getSingleItem, clearSingleItem, toggleCompleted} from '../actions'

class SingleItem extends React.Component {
    componentDidMount(){
        // console.log("item id:", this.props.match.params.itemId)
        this.props.getSingleItem(this.props.match.params.itemId);
    }
    componentWillUnmount(){
        this.props.clearSingleItem();
    }
    render(){
        // console.log(this.props)
        const {_id, complete, completed, created, details, title} = this.props.item
        return(
            <div>
                <h1 className="center">{title}</h1>
                <h2 className="center">{details}</h2>
                <h4 className = {`${complete ? 'green-text' : 'red-text'} darken-2 center`}>
                    {complete ? 'Completed' : 'NOT COMPLETED'}
                </h4>
                <FormatTime text="Created:" time={created} />
                <FormatTime text="Completed:" time={completed} />
                <div className="col s6 center-align">
                    <button onClick={()=>{this.props.toggleCompleted(_id)}} className={`btn ${complete ? 'red' : 'green'}`}>
                        {complete ? 'Remove Complete' : 'Complete Item'}
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        item: state.list.single
    }
}

export default connect(mapStateToProps, {getSingleItem, clearSingleItem, toggleCompleted})(SingleItem)
