import React from "react";

const UpadateList = () => {
  const handleUpdateClick = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/update",
        {
          method: "POST",
          headers: {
            __fetch_req__: "true",
            accept: "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json",
            priority: "u=1, i",
            "sec-ch-ua":
              '"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"Windows"',
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
          },
          referrer: "https://www.swiggy.com/",
          referrerPolicy: "strict-origin-when-cross-origin",
          body: JSON.stringify({
            lat: "26.87560",
            lng: "80.91150",
            nextOffset: "CJhlELQ4KID46MuXsa6BdDCnEzgE",
            widgetOffset: {
              NewListingView_category_bar_chicletranking_TwoRows: "",
              NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
              Restaurant_Group_WebView_SEO_PB_Theme: "",
              collectionV5RestaurantListWidget_SimRestoRelevance_food_seo:
                "114",
              inlineFacetFilter: "",
              restaurantCountWidget: "",
            },
            filters: {},
            seoParams: {
              seoUrl: "https://www.swiggy.com/",
              pageType: "FOOD_HOMEPAGE",
              apiName: "FoodHomePage",
            },
            page_type: "DESKTOP_WEB_LISTING",
            _csrf: "i7JB9nbuf2qK-Ysn4GXaeUxTZWGa4CJeMiwFLWG4",
          }),
          mode: "cors",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Update successful:", data);
      // Handle successful update, if needed
    } catch (error) {
      console.error("Error updating:", error);
      // Handle error, show error message to the user, etc.
    }
  };

  return (
    <div>
      <button onClick={handleUpdateClick}>Update Restaurant List</button>
    </div>
  );
};

export default UpadateList;
