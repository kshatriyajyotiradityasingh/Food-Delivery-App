import RestaurantCard from "./RestaurantCard";
import { listOfRes } from "../utils/Mock_data";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <h2>search</h2>
      </div>
      <div className="cards">
        {listOfRes.map((res, index) => (
          <RestaurantCard key={index} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
