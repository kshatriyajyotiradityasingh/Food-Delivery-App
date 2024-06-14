import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_LINK } from "../utils/Constants";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [show, setShow] = useState(false);
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

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

  // console.log(
  //   resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => c?.card?.card?.["@type"]?.includes(".ItemCategory")
    );

  //console.log(categories);
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

      <div className="res-menu-body">
        <h1>{name}'s Menu</h1>

        {categories.map((cat, index) => (
          <RestaurantCategory
            key={index}
            data={cat.card.card}
            show={index === showIndex ? true : false}
            setShowIndex={setShowIndex}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
