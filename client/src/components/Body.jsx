import React from "react";
import RestaurantCard from "./RestaurantCard";
import ApiCalling from "./ApiCalling";

function Body() {
  const restArr = ApiCalling();
  return (
    <div className="ml-20 mt-4">
      <h1>Restaurants with online food delivery in Aligarh</h1>
      <button className="border rounded-xl p-2 mx-4">Ratings 4.5</button>
      <button className="border rounded-xl p-2 mx-4">Reset</button>
       <input  className="border rounded-2xl p-2 mx-4" type="text" placeholder="Search Restaurants" />
      <div className="mx-18">
        <RestaurantCard restArr={restArr} />
      </div>
    </div>
  );
}

export default Body;
