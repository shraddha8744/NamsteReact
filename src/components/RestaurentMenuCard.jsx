import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../slice/menuSlice";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurentMenuCard = () => {
  const { name } = useParams();
  console.log(name);
  const {
    data: restaurants,
    status,
    error,
  } = useSelector((state) => {
    return state.restaurants;
  });
  console.log(restaurants);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "") {
      dispatch(fetchRestaurants());
    }
  }, [status, dispatch]);
  if (status == "loading") {
    return <Shimmer />;
  }
  if (status == "failed") {
    return `<h1>failed<h1/>`;
  }

  return (
    <div className="">
      <div className="">
        <h1 className="text-xl font-bold">
          Recommended ({restaurants.length})
        </h1>
        {restaurants.map((e) => {
          const { name, costForTwo, id } = e.info;
          return (
            <>
              <h1 key={id}>{name}</h1>
              <h1>{costForTwo}</h1>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurentMenuCard;
