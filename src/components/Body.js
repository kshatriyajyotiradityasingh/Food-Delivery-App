import React from "react";
import RestaurantCard from "./RestaurantCard";
import { listOfRes } from "../utils/Mock_data";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    //  console.log(json);

    setList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(list);
  };

  if (list.length === 0) {
    return (
      <div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filterList = list.filter((res) => res.info.avgRating > 4.2);
              setList(filterList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <Shimmer />
      </div>
    );
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = list.filter((res) => res.info.avgRating > 4.2);
            setList(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="cards">
        {list.map((res, index) => (
          <RestaurantCard key={index} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
