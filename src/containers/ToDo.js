import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../actions';

class ToDo extends Component {
    render() {
        return (
            <main>

                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.props.newTodo(e.target.todo.value);
                    e.target.todo.value = '';
                }}>
                    <input name="todo"></input>
                    <button type="submit">Add new ToDo</button>
                </form>
                <ul>
                    {this.props.list.map((item) => (
                        <li key={item.id} onClick={() => this.props.removeToDo(item.id)}>
                            {item.text}
                        </li>
                    ))}
                </ul>

            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.todos,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // taas jälleen Margit näyttää, miten value ja item jotka ovat rootreducerissa
        // voidaan määritellä täällä. Täällä value = content, ja item on id.
        newTodo: (content) => dispatch({ type: actionTypes.ADD_TODO, value: content }),
        removeToDo: (id) => dispatch({ type: actionTypes.REMOVE_TODO, item: id }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);