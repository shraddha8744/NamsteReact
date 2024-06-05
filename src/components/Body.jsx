import React, { useState } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import useResAllhook from "../utils/useResAllhook";
import useFilter from "../utils/useFilter";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const resData = useResAllhook();
  const allData = useFilter();
  const onlineStatus = useOnlineStatus();
  const [inputData, setInputData] = useState("");

  const handleClick = () => {
    const filteredData = allData.filter((e) => e.info.avgRating > 4);
    resData(filteredData);
  };

  const handleClickAll = () => {
    resData(allData); // Reset to initial data
  };

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleSearchClick = () => {
    const filteredData = allData.filter((e) =>
      e.info.name.toLowerCase().includes(inputData.toLowerCase())
    );
    resData(filteredData);
  };

  if (onlineStatus === false) {
    return <h1>you are offline please check your internet connection</h1>;
  }

  return resData.length == 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="search-bar">
        <button
          onClick={handleClick}
          className="w-40 border border-gray-950 h-10 rounded-lg ml-5 mt-3"
        >
          Top Restaurants
        </button>
        <button
          onClick={handleClickAll}
          className="w-40 border border-gray-950 h-10 rounded-lg ml-5 mt-3"
        >
          All Restaurants
        </button>
        <input
          type="text"
          placeholder="search food here......."
          className="bg-gray-100 ml-[600px] border border-1 border-slate-500 rounded-md h-8 w-[350px]"
          onChange={handleInputChange}
          value={inputData}
        />
        <button
          className="w-24 h-8 rounded-md ml-3 bg-orange-400 text-stone-50 shadow-lg"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
      <div className="res-container flex flex-wrap">
        {resData.map((e, index) => (
          <ResCard key={index} resData={e.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
