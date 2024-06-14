import ItemList from "./ItemList";

const RestaurantCategory = ({ data, show, setShowIndex, index }) => {
  const { title, itemCards } = data;

  const handleClick = () => {
    show ? setShowIndex(null) : setShowIndex(index);
  };

  return (
    <div>
      <div className="menu-cat">
        {/* Header */}
        <div className="menu-cat-head" onClick={handleClick}>
          <span className="menu-cat-head-text">
            {title}-({itemCards.length})
          </span>
          <span>▼</span>
        </div>
        {/* Body */}

        {show && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
