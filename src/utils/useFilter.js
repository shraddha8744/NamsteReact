import axios from "axios";
import { useEffect, useState } from "react";

const useFilter=()=>{
    const [allData, setAllData] = useState([]);
    const menuApi=()=>{
        axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING").then((result) => {
            setAllData(
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
return allData

}
export default useFilter