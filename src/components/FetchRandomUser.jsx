import React from "react";


const defaultPersons = [{
    name: "",
    email: "",
    gender: ""
}]

export default class FetchRandomUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            people: defaultPersons
        }
    }

    async componentDidMount() {
        try {
            const url = "https://randomuser.me/api/?results=50"
            const response = await fetch(url)
            const people = await response.json().then((res) => res.results)
            let people_ = []
            if (people) {
                people_ = people.map(person => {
                    return {
                        name: person.name.first,
                        gender: person.gender,
                        email: person.email
                    }
                })
            }
            this.setState({ loading: false, people: people_ })
        }
        catch (err) {
            console.log("********************************\n", err)
        }
    }
    render() {
        if (this.state.loading) {
            return (
                <div>loading...</div>
            )
        }
        if (!this.state.people.length) {
            return (
                <div>people not found</div>
            )
        }
        return (
            <div>
                {this.state.people.map((person, i) => {
                    return (
                        <div key={person.email} >
                            <h2>{i}</h2>
                            <div>{person.name}</div>
                            <div>{person.email}</div>
                            <div>{person.gender}</div>
                        </div>
                    )

                })}
            </div>
        )
    }
}