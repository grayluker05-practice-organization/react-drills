import React, {Component} from 'react';

class Todo extends Component {
    render(){
        return(
            <p>
                <h2>{this.props.task}</h2>
            </p>
        )
    }
}

export default Todo;