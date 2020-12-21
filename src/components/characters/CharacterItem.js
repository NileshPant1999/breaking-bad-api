import React from "react";

const CharacterItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <a href={`character/${item.char_id}`}>
            <img src={item.img} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
