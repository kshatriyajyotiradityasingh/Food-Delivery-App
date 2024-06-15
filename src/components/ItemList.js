import { useDispatch } from "react-redux";
import { CDN_LINK } from "../utils/Constants";
import { addItem } from "../utils/CartSlice";

const ItemList = ({ items }) => {
  // console.log(items);

  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="item">
          <div className="item-head">
            <div>
              <span>{item.card.info.name}</span>
              <span>
                - ₹{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
              <p className="item-head-des">{item.card.info.description}</p>
            </div>

            <div>
              <button
                className="item-add-button"
                onClick={() => handleClick(item)}
              >
                Add+
              </button>
              <img
                src={CDN_LINK + item.card.info.imageId}
                className="item-img"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
