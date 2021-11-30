import React from "react";

const Todo = props => {
    return (
        <div>
            <li
                // key={props.todo.id}
                style={{
                    width: "20em",
                    height: "4em",
                    margin: "auto",
                    fontFamily: "revert",
                    backgroundColor: props.todo.completed ? "#AFFB95" : "#FBF795",
                    borderBlockEndWidth: "0.3em",
                    borderRadius: "5%",
                    marginBottom: "0.5em",
                    display: "inline-block",
                    wordWrap: "break-word"
                }}
                className="list-group-item"
                onClick={() => props.toggelComplete(props.todo.id)}
            >
                <p
                    style={{
                        fontFamily: "cursive",
                        fontSize: "1.2em",
                        marginTop: "0.5em",
                    }}
                >
                    {props.todo.text}
                </p>
            </li >
            <button
                style={{
                    display: "inline-block",
                    marginTop: "0.5em",
                    marginLeft: "1em",
                    borderRadius: "1em"
                }}
                className="btn-close"
                onClick={() => props.handleDelete(props.todo.id)}></button>
        </div>
    )
}

export default Todo
