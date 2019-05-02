import React, { Component } from 'react'
import Proptype from 'prop-types';
export class TodoItem extends Component {
    getStyle = () =>{
        return {
            backgroundColor: 'grey',
            padding : '10px',
            borderBottom:'1px #ccc dotted',
            textDecoration : this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    
    

    render() {
        const {id,title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{' '}
            {title}
            <button type="button" style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>X</button>
        </p>
      </div>
    )
  }
}

const btnStyle ={
    backgroundColor: 'black',
    color:'white',
    border:'none',
    borderRadius:'50%',
    float:'right'
}


const itemStyle ={
    backgroundColor: 'grey'
}

TodoItem.Proptype = {
    todo : Proptype.object.isRequired,
    markComplete : Proptype.func.isRequired,
    delTodo : Proptype.func.isRequired
}

export default TodoItem
