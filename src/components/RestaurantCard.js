import { CDN_LINK } from "../utils/Constants";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    cuisines,
    deliveryTime,
  } = resData.info;

  // console.log(name);
  return (
    <div className="res-card">
      <img className="res-img" src={CDN_LINK + cloudinaryImageId} />

      <div res-des>
        <h3>{name}</h3>
        <h4>{avgRating} star</h4>
        <h4>{deliveryTime}</h4>
        <div>
          <h4>{cuisines.join(",")}</h4>
        </div>

        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
