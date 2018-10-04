import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'

class AddItem extends Component {
    renderInput(props){
        console.log('render input arguments', props)
        return(
            <div className="row">
                <div className="s12">
                    <label>Label Here</label>
                    <input {...props.input} type="text"/>
                </div>
            </div>
        )
    }
    saveItem=(values)=>{
        console.log("Form Values: ",values)
        //do stuff here;
    }
    render(){
        const {handleSubmit} = this.props
        return (
            <div>
                <h1 className="center">Add Item</h1>
                <div className="row">
                    <div className="col s8 offset-s2">
                        <form onSubmit={handleSubmit(this.saveItem)}>
                            <Field name="title" component={this.renderInput}/>
                            <Field name="details" component={this.renderInput}/>
                            <div className="row">
                                <div className="s12 right-align">
                                    <button className="btn blue-grey">Add Item</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form: 'add-item' //no specific name, just made up
})(AddItem);
