import React from "react";
import TodoForm from './TodoForm';
import Todo from "./Todo";

export default class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            serialkey: 1,
            text: "",
            todos: [],
            todosDisplay: "All"
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.text) {
            const todo = {
                id: this.state.serialkey,
                text: this.state.text,
                completed: false
            }
            this.setState({
                serialkey: this.state.serialkey + 1,
                todos: [todo, ...this.state.todos],
                text: ""
            })
        }

    }
    handleChange = (event) => {
        this.setState({ text: event.target.value })
    }
    toggelComplete = (id) => {
        const newTodos = this.state.todos
        newTodos.forEach((todo) => {
            if (todo.id === id) { todo.completed = !todo.completed }
        })
        this.setState({
            todos: newTodos
        })

    }

    handleTodosToShow = (s) => {
        this.setState({ todosDisplay: s })
    }

    clearCompleted = () => {
        let todos_ = this.state.todos.filter((todo_) => todo_.completed === false)
        this.setState({ todos: todos_ })
    }
    handleDelete = (id) => {
        let todos_ = this.state.todos.filter((todo_) => todo_.id !== id)
        this.setState({ todos: todos_ })
    }
    render() {
        let todosToShow = []
        todosToShow = this.state.todos.filter((todo_) => todo_.completed === false)
        const todosLeft = todosToShow.length
        if (this.state.todosDisplay === "All") {
            todosToShow = [...this.state.todos]
        }

        if (this.state.todosDisplay === "Completed") {
            todosToShow = this.state.todos.filter((todo_) => todo_.completed === true)
        }
        // console.log(todosToShow)
        const buttonClass = "allEqualBtn m-2 shadow btn btn-"
        return (
            <div>
                <TodoForm
                    // key="todoForm"
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    value={this.state.text}
                />
                <div>
                    {todosToShow.map((todo_) => {
                        return <Todo
                            key={todo_.id}
                            todo={todo_}
                            toggelComplete={this.toggelComplete}
                            handleDelete={this.handleDelete}
                        />
                    })}
                </div>
                <div style={{ fontSize: "2em" }} >{todosLeft} todos to go</div>
                <button onClick={() => this.handleTodosToShow("All")} className={buttonClass + "primary"}>All</button>
                <button onClick={() => this.handleTodosToShow("Active")} className={buttonClass + "warning"}>Active</button>
                <button onClick={() => this.handleTodosToShow("Completed")} className={buttonClass + "success"}>Complete</button>
                <button onClick={this.clearCompleted} className={buttonClass + "danger"}>Clear Completed</button>
            </div>

        )
    }

}