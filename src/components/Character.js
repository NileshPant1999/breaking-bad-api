import Axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "../components/ui/Spinner";

function Character(props) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const id = props.match.params.id;

  const fetchCharacter = async () => {
    setIsLoading(true);
    const result = await Axios(
      `https://www.breakingbadapi.com/api/characters/${id}`
    );
    setItems(result.data[0]);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
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
