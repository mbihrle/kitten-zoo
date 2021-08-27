import { React, Component } from "react";

import "./App.css";
import CardList from "../components/CardList/CardList";
import SearchBox from "../components/SearchBox/SearchBox";

// import { quotes } from "../quotes";

class App extends Component {
    constructor() {
        super();
        this.state = {
            quotes: [],
            searchfield: "",
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => {
                // this.setState({ });
                this.setState({ quotes: users });
            });
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    };

    render() {
        const filteredQuotes = this.state.quotes.filter((quote) => {
            return quote.name
                .toLowerCase()
                .includes(this.state.searchfield.toLowerCase());
        });
        if (this.state.quotes.length === 0) {
            return <h1>Loading ...</h1>;
        } else {
            return (
                <div>
                    <div className="flex">
                        <div className="w-60 pa1"></div>
                        <div className="w-30 pa1 tc">
                            <h1 id="header" className="mt5">
                                Zitate Chuck Norris
                            </h1>
                            <SearchBox searchChange={this.onSearchChange} />
                            <CardList quotes={filteredQuotes} />
                        </div>
                        <div className="w-10 pa1"></div>
                    </div>
                </div>
            );
        }
    }
}

export default App;
