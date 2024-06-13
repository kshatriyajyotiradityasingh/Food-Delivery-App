import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_LINK } from "../utils/Constants";
const RestaurantMenu = () => {
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
            <li key={item.card.info.id}>
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
