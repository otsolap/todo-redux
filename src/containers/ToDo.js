import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../actions';

class ToDo extends Component {
    render() {
        return (
            <div>
            
            <form onSubmit={e => {
                e.preventDefault();
                this.props.todos(e.target.name.value);
                e.target.todos.value = '';
            }}>
            <label htmlFor="todos"> ToDos</label>
            <input name="todos"></input>
            <button type="submit">Add new ToDo</button>
            </form>
           <ul>
               {this.props.todos.map((item) => (
                   <li key={item.id}>{item.data}</li>
               ))}
           </ul>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todo,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToDo: (data) => dispatch({ type: actionTypes.ADD_TODO, todo: data}),
        removeToDo: () => dispatch({type: actionTypes.REMOVE_TODO}),
    };
};

export default connect (mapStateToProps, mapDispatchToProps)(ToDo);