import React ,{Component}from 'react';
import TodoItem from './TodoItem';
import Proptype from 'prop-types';
class Todo extends Component {
    
    render(){
        return (
            this.props.todos.map((todo,index)=> (
            <TodoItem 
            key={index} 
            todo={todo} 
            markComplete={this.props.markComplete}
            delTodo={this.props.delTodo}/>
        ))
        );
    }
}

Todo.Proptype = {
    todos : Proptype.array.isRequired,
    markComplete : Proptype.func.isRequired,
    delTodo : Proptype.func.isRequired
}

export default Todo;
