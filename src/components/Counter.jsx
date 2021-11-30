import React from "react";

class Counter extends React.Component {
    render() {
        return (
            <div>
                <div>count : {this.props.data[this.props.count]}</div>
                <button onClick={this.props.handleIncrement}>increment</button>
                <button onClick={this.props.handleDecrement}>decrement</button>
            </div>

        )
    }
}

export default Counter;