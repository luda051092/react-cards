import React, { useState } from "react";
import "./Card.css";

/** single card: renders card as received from deck */

function Card({ name, image }) {
    //get these once, will not be updated for the same card
    const [{ angle, xPos, yPos }] = useState({
        angle: Math.random() * 90 - 45,
        xPos: Math.random() * 40 - 20,
        yPos: Math.random() * 40 - 20,
    });

    const transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;

    return <img
        classname="Card"
        alt={name}
        src={image}
        style={{ transform }} />;
}

export default Card;