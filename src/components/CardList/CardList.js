import React from "react";
import Card from "../Card/Card";

const CardList = ({ quotes }) => {
    const cardComponent = quotes.map((quote, i) => {
        return (
            <Card
                key={quotes[i].id}
                id={quotes[i].id}
                quote={quotes[i].name}
            />
        );
    });

    return <div>{cardComponent}</div>;
};

export default CardList;
