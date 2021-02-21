import React from "react";
import "../style/Card.css";
import Add from "../static/add.png";
import Tick from "../static/tick.png";

function Card({ word, onAdd }) {
  const [clicked, setClicked] = React.useState(false);
  let reading = !word.japanese[0].word ? null : word.japanese[0].reading;
  let expression = !word.japanese[0].word
    ? word.japanese[0].reading
    : word.japanese[0].word;
  return (
    <div className="card">
      <div className="card-left">
        <div className="reading">{reading}</div>
        <div className="word">{expression}</div>
        <div>
          {word.senses.map((sense, index) => (
            <div className="def" key={index}>
              <span className="index">{index + 1}. </span>
              <span>{sense.english_definitions.join("; ")}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="card-right">
        <div
          className="add-button"
          onClick={e => {
            if (!clicked) {
              onAdd({
                expression: expression,
                reading: !reading ? "" : reading,
                meaning: word.senses[0].english_definitions.join("; "),
              });
              setClicked(true);
            }
          }}
        >
          {clicked ? (
            <img src={Tick} alt="" height="20px" width="20px" />
          ) : (
            <img src={Add} alt="" height="20px" width="20px" />
          )}
          <div className="add-text">Add to List</div>
        </div>
      </div>
    </div>
  );
}

export default Card;