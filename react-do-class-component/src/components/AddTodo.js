import React, { Component } from 'react'
import Proptype from 'prop-types';
export class AddTodo extends Component {
    state ={
        title : ''
    }
    changeInput =(event) =>{
        
        this.setState({title : event.target.value})
    }
    submit = (event)=>{
        event.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''})
    }
  render() {
    return (
      <form onSubmit={this.submit} style={{display: 'flex'}}>
        <input 
            type="text"
            name="title"
            style={{flex:'10',padding:'5px'}}
            placeholder="Add Todo ..."
            value={this.state.title}
            onChange={this.changeInput}
            />
            <input
            type="submit"
            value="Submit"
            className="btn"
            style={{flex:'1'}}
            />
      </form>
    )
  }
}

AddTodo.PropType = {
  addTodo : Proptype.object.isRequired,
  markComplete : Proptype.func.isRequired,
  delTodo : Proptype.func.isRequired
}


export default AddTodo
