import React from "react";
import "./Card.css";

const Card = ({ id, quote, name }) => {
    return (
        <div className="db tc  br3 pa3 ma2 grow shadow-5">
            <img
                className="br3 ma2"
                src={`https://robohash.org/${quote}?set=set4&size=200x200`}
                // src={`https://picsum.photos/200?random=${id}&grayscale`}
                // src={`https://picsum.photos/200?random=${id}`}
                alt="something to look"
            />
            <div className="cardText">
                <h2>Deutsch</h2>
                <p>{quote}</p>
                <h2>Englisch</h2>
                <p>{quote}</p>
            </div>
        </div>
    );
};

export default Card;
