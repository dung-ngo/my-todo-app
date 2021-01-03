import React, {useState} from "react";
import Todos from "./Todos";
import {v4 as uuid} from "uuid"; 
import Header from './layout/Header';
import AddTodo from "./AddTodo"

function TodoApp() {
    const [state, setState] = useState({
        todos: [{
            id: 1,
            title: "Setup development environment",
            completed: true
        },
        {
            id: 2,
            title: "Develop website and add content",
            completed: false
        },
        {
            id: 3,
            title: "Deploy to live server",
            completed: false
        }
            
        ]
    })

    const handleCheckbox = id => {
        setState({
            todos: state.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    }
    const deleteTodo = id => {
        setState({
          todos: [
            ...state.todos.filter(todo => {
              return todo.id !== id;
            })
          ]
        })
      }
    const addTodo = title => {
        const newTodo = {
            id: uuid,
            title: title,
            completed: false
        }
        setState({
            todos: [...state.todos, newTodo]
        })
    }

    return (
        <div className="container">
            <Header />
            <AddTodo addTodo={addTodo} />
            <Todos  todos={state.todos}
                    handleChange={handleCheckbox}
                    deleteTodo={deleteTodo} />
        </div>
    );
}   

export default TodoApp;