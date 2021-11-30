import React from "react";

export default class TodoForm extends React.Component {

    render() {

        return (
            <form onSubmit={this.props.handleSubmit}>
                <label htmlFor="text" className="m-2 form-label" style={{ fontSize: "3em", fontFamily: "cursive", opacity: 0.5 }}>TODOS</label>
                <div>
                    <input
                        type="text"
                        name="text"
                        id="text"
                        placeholder="Todo..."
                        style={
                            {
                                width: "40%",
                                height: "3em",
                                margin: "auto",
                                marginBottom: "1em",
                                padding: "1em",
                                fontSize: "1em"
                            }
                        }
                        value={this.props.value}
                        onChange={this.props.handleChange}
                    />
                    <button type="submit" className="btn btn-light m-2 shadow"
                        style={{ fontSize: "1em", padding: "1em", borderColor: "black", marginLeft: "100%" }}>Add Todo</button>
                </div>

            </form>
        )
    }
}