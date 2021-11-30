import React from "react";
const initialState = {
    name: "",
    email: "",
    password: "",
    nameError: "",
    emailError: "",
    passwordError: ""
}
class ValidationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = initialState
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    validate = () => {
        let nameError = ""
        let emailError = ""
        let passwordError = ""
        if (this.state.name === "") {
            nameError = "Name empty"
        }
        if (!this.state.email.includes("@")) {
            emailError = "Invalid Email"
        }
        if (this.state.password.length < 3) {
            passwordError = "Password too small"
        }
        if (emailError || passwordError || nameError) {
            this.setState({ emailError, passwordError, nameError })
            return false
        }
        return true
    }
    handleSubmit = (event) => {
        event.preventDefault()
        if (this.validate()) {
            console.log("submitted")
            this.setState(initialState)
        }
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name" >name</label>
                    <input type="text" name="name" id="name" placeholder="Username" value={this.state.name} onChange={this.handleChange} />
                    <div style={{ color: "red", fontSize: 12 }}>{this.state.nameError}</div>
                </div>
                <div>
                    <label htmlFor="email" >email</label>
                    <input type="text" name="email" id="email" placeholder="email" value={this.state.email} onChange={this.handleChange} />
                    <div style={{ color: "red", fontSize: 12 }}>{this.state.emailError}</div>
                </div>
                <div>
                    <label htmlFor="password" >password</label>
                    <input type="password" name="password" id="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
                    <div style={{ color: "red", fontSize: 12 }}>{this.state.passwordError}</div>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default ValidationForm