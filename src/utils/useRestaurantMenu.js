import { MENU_LINK } from "./Constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    const data = await fetch(MENU_LINK + resId);

    const json = await data.json();

    //  console.log(json);

    setResInfo(json);
  };

  return resInfo;
};

export default useRestaurantMenu;
