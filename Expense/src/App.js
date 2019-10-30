import React from 'react';
import {Route,Switch,withRouter} from 'react-router-dom'
import './App.css';
import {Todos} from '../src/components/Todos';
import {Header} from './components/Header';
import {Home} from './components/Home'
import{AddTodo} from './components/AddTodo';
import uuid from 'uuid';
import firebase from '../src/firebase/firebase';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      todos:[]
    }
    this.loadTodo();
  }

  addTodo=(desc,expense)=>{
      var todo={id:uuid.v4(),desc:desc,expense:expense,completed:false};
      var promise=firebase.database().ref('/todos/'+todo.id).set(todo);
      promise.then(this.setState({todos:[...this.state.todos,todo]}));

  }
  loadTodo(){
    var todos=firebase.database().ref('/todos/');
    todos.on('value',(snapshot)=>{
      let todos=snapshot.val();
      console.log(todos);
      for(let key in todos){
        this.setState({todos:[...this.state.todos,todos[key]]});
      }
      // this.setState({todos:[...this.state.todos,todos]});
    })
  }
  markComplete=(id)=>{
    this.setState({
      todos: this.state.todos.map((todo)=>{
        if(todo.id==id){
          todo.completed=!todo.completed;
          var promise=firebase.database().ref('/todos/'+todo.id).set(todo);
        }
        return todo;
      })
    });

  }
  render(){
    return (
    <div className="App container">
      <Header/>
      <br/>
      
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/todos' render={() => <Todos todos={this.state.todos} markComplete={this.markComplete} styles={this.getStyle}  />}/>
      <Route path='/addtodo' render={()=><AddTodo addTodo={this.addTodo}/>}/>
      </Switch>
    </div>
  )
  }
}

export default withRouter(App);
