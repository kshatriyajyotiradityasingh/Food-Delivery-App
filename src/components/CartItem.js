import { useDispatch, useSelector } from "react-redux";
import { CDN_LINK } from "../utils/Constants";
import { removeItem } from "../utils/CartSlice";
import { removeItemPrice } from "../utils/PriceSlice";

const CartItem = ({ items }) => {
  // console.log(items);

  const dispatch = useDispatch();
  const totalPrice = useSelector((store) => store.totalPrice.price);

  console.log(totalPrice);

  const handleClick = (index, item) => {
    const removePrice = item.card.info.price
      ? item.card.info.price
      : item.card.info.defaultPrice;

    console.log(removePrice);
    dispatch(removeItem(index));
    dispatch(removeItemPrice(removePrice));
  };

  return (
    <div>
      {items.map((item, index) => (
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
                onClick={() => handleClick(index, item)}
              >
                Remove
              </button>
              <img
                src={CDN_LINK + item.card.info.imageId}
                className="item-img"
              />
            </div>
          </div>
        </div>
      ))}

      {items.length ? (
        <div>
          <h1>Total Price : {totalPrice}</h1>
        </div>
      ) : (
        <div>
          <h1> </h1>
        </div>
      )}
    </div>
  );
};

export default CartItem;
