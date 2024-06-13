import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_LINK, CDN_LINK } from "../utils/Constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    const data = await fetch(MENU_LINK + resId);

    const json = await data.json();

    //   console.log(json);

    setResInfo(json);
  };

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    costForTwo,
    cloudinaryImageId,
    avgRating,
    totalRatingsString,
    cuisines,
  } = resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  console.log(itemCards);

  return (
    <div>
      <div className="res-menu-head">
        <img className="menu-img" src={CDN_LINK + cloudinaryImageId} />

        <div className="res-menu-des">
          <h1>{name}</h1>
          <h2>Rs. {costForTwo / 100} cost for two</h2>
          <h2>{cuisines.join(",")}</h2>
          <h2>{avgRating} stars</h2>
          <h4>{totalRatingsString}</h4>
        </div>
      </div>

      <div className="res-menu-head">
        <h1>Menu</h1>
        <ul>
          {itemCards.map((item) => (
            <li>
              {item.card.info.name}-Rs.{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
