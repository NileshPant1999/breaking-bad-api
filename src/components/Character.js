import Axios from "axios";
import React, { useEffect, useState } from "react";

function Character(props) {
  const [items, setItems] = useState([]);
  const id = props.match.params.id;

  const fetchCharacter = async () => {
    const result = await Axios(
      `https://www.breakingbadapi.com/api/characters/${id}`
    );
    setItems(result.data[0]);
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  return (
    <div className="character__details">
      <img src={items.img} alt="" height="500px" width="500px" />
      <div>
        <h1>{items.name}</h1>
        <h1>{items.nickname}</h1>
        <h1>{items.occupation}</h1>
        <h1>{items.status}</h1>
      </div>
    </div>
  );
}

export default Character;
