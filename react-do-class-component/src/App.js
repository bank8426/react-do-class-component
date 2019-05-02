import React ,{Component}from 'react';
import Todo from './components/Todo';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import uuid from 'uuid'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css'
import axios from 'axios'

class App extends Component {
  state ={
    todos : [
    ]
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos : res.data}))
  }

  markComplete =(id)=>{
    this.setState({todos: this.state.todos.map(todo=>{
     if(todo.id === id)
      {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  } 

  delTodo =(id)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({todos: this.state.todos.filter(todo=>todo.id !== id)}))
    
  } 

  addTodo=(title)=>{
    axios.post('https://jsonplaceholder.typicode.com/todos',
    {
      title,
      completed:false
    })
    .then(res=> this.setState({todos:[...this.state.todos,res.data]}));
    
    console.log(title)
  }

  render(){
    console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props =>(
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todo todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
