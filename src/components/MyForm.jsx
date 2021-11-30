import React from "react";

class MyForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            description: "",
            checked: false,
            salutation: "Mr"
        }
    }

    // handleOptionChange = (event) => {
    //     console.log(event.target.option)
    //     this.setState({ option: event.target.option })
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    handleChange = (event) => {
        if (event.target.type === "checkbox") {
            this.setState({ [event.target.name]: event.target.checked })
        }
        else {
            this.setState({ [event.target.name]: event.target.value })
        }

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Form</h1>
                <div>
                    <input name="name" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div>
                    <textarea name="description" value={this.state.description} onChange={this.handleChange} />
                </div>
                <div>
                    <input name="checked" type="checkbox" value={this.state.checked} onChange={this.handleChange} />
                </div>
                <div>
                    <select name="salutation" value={this.state.salutation} onChange={this.handleChange}>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                        <option value="Ms">Ms</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default MyForm
// export { MyForm }