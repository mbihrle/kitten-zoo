import React from "react";
import Card from "../Card/Card";

const CardList = ({ users }) => {
    const cardComponent = users.map((user, i) => {
        return <Card key={users[i].id} id={users[i].id} user={users[i].name} />;
    });

    return <div>{cardComponent}</div>;
};

export default CardList;
