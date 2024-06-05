import React from "react";
import { useNavigate } from "react-router-dom";

const ResCard = (props) => {
  const { resData } = props;
  const { name, locality, costForTwo, avgRating, cloudinaryImageId, cuisines } =
    resData;
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate(`/menu`);
  };
  const handleMenuClicktwo = () => {
    navigate(`/menu2`);
  };

  return (
    <div className="res-card w-[280px] h-[500px] shadow-xl m-10 bg-gray-100 rounded-lg transition duration-300 ease-in-out hover:bg-gray-200 hover:scale-105 hover:cursor-pointer text-ellipsis overflow-hidden ">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
          cloudinaryImageId
        }
        className=" p-2 rounded-2xl"
        alt=""
      />
      <div className="h-[145px]">
        <h1 className="font-bold ">{name}</h1>
        <h2 className="font-medium text-teal-500">{locality}</h2>
        <h3 className="font-semibold ">{costForTwo}</h3>
        <h3>{cuisines.join(",")}</h3>
        <h3>{avgRating}</h3>
      </div>

      <button
        className="w-24 h-8 rounded-md ml-10 bg-orange-400 text-stone-50 shadow-lg mt-2"
        onClick={handleMenuClick}
      >
        view menu
      </button>
      <button
        className="w-24 h-8 rounded-md ml-10 bg-orange-400 text-stone-50 shadow-lg mt-2"
        onClick={handleMenuClicktwo}
      >
        view menu 2
      </button>
    </div>
  );
};

export default ResCard;
