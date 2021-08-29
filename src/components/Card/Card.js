import React from "react";
import "./Card.css";

const Card = ({ id, user }) => {
    return (
        <div className="dib tc  br3 pa3 ma2 grow shadow-5">
            <img
                className="br3 ma2"
                src={`https://robohash.org/${user}?set=set4&size=200x200`}
                alt="something to look"
            />
            <div className="cardText">
                <p>{user}</p>
            </div>
        </div>
    );
};

export default Card;
