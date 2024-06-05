import axios from "axios"
import { useEffect, useState } from "react";

const useResAllhook=()=>{
    const [resData, setResData] = useState([]);
    const menuApi=()=>{
        axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING").then((result) => {
            setResData(
                result?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                  ?.restaurants
              );
            
        }).catch((err) => {
            console.log(err);
            
        });
    }
useEffect(()=>{
    menuApi()
},[])
return resData
}
export default useResAllhook