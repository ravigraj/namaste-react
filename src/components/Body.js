import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [resListState, setResListState] = useState(resList); // state variable of React
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredResList = resListState.filter(
              (resListItem) => resListItem.data.avgRating > 4
            );
            setResListState(filteredResList);
          }}
        >
          Top Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {resListState.map((resListItem) => (
          <RestaurantCard key={resListItem.data.id} resData={resListItem} />
        ))}
      </div>
    </div>
  );
};

export default Body;
