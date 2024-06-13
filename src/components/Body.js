import React from "react";
import ReactDOM from "react-dom";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [list, setList] = useState([]);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    console.log(data);

    const json = await data.json();

    //console.log(json);

    setList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (searchData.length === 0) {
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
      <div className="body-head">
        <Search list={list} setSearchData={setSearchData} />
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filterList = searchData.filter(
                (res) => res.info.avgRating > 4.2
              );
              setSearchData(filterList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="cards">
        {searchData.map((res, index) => (
          <Link key={index} to={"/restaurant/" + res.info.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
