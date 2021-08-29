import { React, Component } from "react";

import "./App.css";
import CardList from "../components/CardList/CardList";
import SearchBox from "../components/SearchBox/SearchBox";
import Scroll from "../components/Scroll/Scroll";

// import { quotes } from "../quotes";

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            searchfield: "",
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => {
                // this.setState({ });
                this.setState({ users: users });
            });
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    };

    render() {
        const { users, searchfield } = this.state;
        const filteredUsers = users.filter((user) => {
            return user.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return !users.length ? (
            <h1>Loading ...</h1>
        ) : (
            <div>
                <div className="flex">
                    <div className="pa1"></div>
                    <div className="pa1 tc">
                        <h1 id="header" className="ma4">
                            Kitten-Zoo
                        </h1>
                        <SearchBox searchChange={this.onSearchChange} />
                        <Scroll>
                            <CardList users={filteredUsers} />
                        </Scroll>
                    </div>
                    <div className="w-10 pa1"></div>
                </div>
            </div>
        );
    }
}

export default App;
