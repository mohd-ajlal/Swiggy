import axios from "axios";
import { useEffect, useState } from "react";

function ApiCalling(){
    const [allRestaurantArr, setAllRestaurantArr] =  useState([])
    
    useEffect(function(){
        async function calling() {
            const api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.8999565&lng=78.0838533&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            const resp = await axios.get(api)
            // console.log(resp.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants, "response from api");
            setAllRestaurantArr(resp.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        }
        calling()
    },[])

    return allRestaurantArr;
}

export default ApiCalling;