import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resListState, setResListState] = useState([]); // state variable of React

  const [resFilterListState, setResFilterListState] = useState([]); // state variable of React

  const [searchText, setSearchText] = useState([]); // state variable of React

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9713697&lng=77.755937&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setResListState(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setResFilterListState(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //   if (resListState.length === 0) {
  //     return <Shimmer />;
  //   }

  return resListState.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            type="button"
            className="search-button"
            onClick={() => {
              const filteredResList = resListState.filter((resListItem) =>
                resListItem.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setResFilterListState(filteredResList);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredResList = resListState.filter(
              (resListItem) => resListItem.info.avgRating > 4
            );
            setResFilterListState(filteredResList);
          }}
        >
          Top Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {resFilterListState.map((resListItem) => (
          <RestaurantCard key={resListItem.info.id} resData={resListItem} />
        ))}
      </div>
    </div>
  );
};

export default Body;
