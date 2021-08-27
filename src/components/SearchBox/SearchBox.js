import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className="pa2">
            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                id="searchbox"
                name="searchbox"
                placeholder="search quote"
                onChange={searchChange}
            ></input>
        </div>
    );
};

export default SearchBox;
