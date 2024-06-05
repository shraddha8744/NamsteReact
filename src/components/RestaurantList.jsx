import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../slice/menuSlice";
import Shimmer from "./Shimmer";

const RestaurantList = () => {
  const dispatch = useDispatch();
  const {
    data: restaurants,
    status,
    error,
  } = useSelector((state) => state.restaurants);

  useEffect(() => {
    if (status === "") {
      dispatch(fetchRestaurants());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <Shimmer />;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Restaurants</h1>

      <div className="flex flex-wrap">
        {restaurants.map((e, i) => {
          const {
            name,
            locality,
            costForTwo,
            avgRating,
            cloudinaryImageId,
            cuisines,
          } = e.info;
          return (
            <>
              <div
                key={i}
                className="res-card w-[280px] shadow-xl m-10 bg-gray-100 rounded-lg transition duration-300 ease-in-out hover:bg-gray-200 hover:scale-105 hover:cursor-pointer text-ellipsis overflow-hidden "
              >
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
                    cloudinaryImageId
                  }
                  className=" p-2 rounded-2xl"
                  alt=""
                />
                <h1 className="font-bold ">{name}</h1>
                <h2 className="font-medium text-teal-500">{locality}</h2>
                <h3 className="font-semibold ">{costForTwo}</h3>
                <h3>{cuisines.join(",")}</h3>

                <h3>{avgRating}</h3>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantList;
