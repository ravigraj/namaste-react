import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfoState, setResInfoState] = useState(null);

  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);

    const json = await data.json();
    setResInfoState(json.data);
  };

  if (resInfoState === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessages } =
    resInfoState?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfoState?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwoMessages}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
