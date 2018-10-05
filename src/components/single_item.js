import React from 'react';
import CompletedStatus from './completed_status';
import FormatTime from './format_time'
import { connect } from 'react-redux';
import {getSingleItem} from '../actions'

class SingleItem extends React.Component {
    componentDidMount(){
        // console.log("item id:", this.props.match.params.itemId)
        this.props.getSingleItem(this.props.match.params.itemId);
    }
    render(){
        // console.log(this.props)
        const {complete, created, details, title} = this.props.item
        return(
            <div>
                <h1 className="center">{title}</h1>
                <h2 className="center">{details}</h2>
                <CompletedStatus status={complete}/>
                <FormatTime text="Created:" time={created} />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        item: state.list.single
    }
}

export default connect(mapStateToProps, {getSingleItem})(SingleItem)
