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
      <table style="width:100%">
        <tr>
          <th>Name</th>
          <th>Lastname</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
      </table>
      <div className="details">
        <h1> Name: {items.name}</h1>
        <h1>Actor: {items.portrayed}</h1>
        <h1>NickName: {items.nickname}</h1>
        <h1>Occupation: {items.occupation}</h1>
        <h1>Status: {items.status}</h1>
      </div>
    </div>
  );
}

export default Character;
