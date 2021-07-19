import React, { Component } from 'react'
import './todo.css'
export default class Todoapp extends Component {
    state = {
        input:"",
        items: [],
    }

    handleChange =(event) => {
        this.setState({
                input : event.target.value
        })
         
    };
    storeItems = (event) => {
        event.preventDefault();
        const {input} = this.state;
        

        this.setState({
            items : [...this.state.items, input],
            input : "" 
        })
    }
    deleteItems = (index) => {
        // const allItems  = this.state.items

        // allItems.splice(index, 1);

        this.setState({
            items : this.state.items.filter((data,i) => i !==index),
        })
    }
    render() {
        const {input,items} = this.state;
        console.log(items);
        return (
            <div className="todo_container" > 
                <form className="inputSection" onSubmit = {this.storeItems}>
                <h1>Todo App</h1>
                    <input type="text" placeholder="Enter tasks....." value ={input} onChange ={this.handleChange}></input>
                    
                </form>
                <ul>
                <li>
                        
                </li>
                {items.map((data,index) => (
                            <li key ={index}>{data} <i className="fas fa-minus-circle" onClick={() => this.deleteItems(index)}></i></li>  
                        ))}
                </ul>
            </div>
        )
    }
}

