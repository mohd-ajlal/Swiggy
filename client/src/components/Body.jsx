import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ApiCalling from "./ApiCalling";

function Body() {
  const restArr = ApiCalling();
  const [allRestArr, setallRestArr] = useState(restArr);
  const [activeButton, setActiveButton] = useState("all");
  const [filter, setFilter] = useState("");
  console.log(allRestArr, "allRestArr");

  const handleFilter = (e) =>{
    const value = e.target.value.toLowerCase();
    setFilter(value);
    const filteredRestaurants = restArr.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(value)
    );
    setallRestArr(filteredRestaurants);
  }

  useEffect(function(){
    if(restArr && restArr.length > 0){
      setallRestArr(restArr);
    }
  },[restArr])



  return (
    <div className="ml-20 mt-4">
      <h1>Restaurants with online food delivery in Aligarh</h1>
      <button className = {`border rounded-xl p-2 mx-4 ${activeButton === "ratings" ? "bg-blue-500 text-white" : ""} hover:bg-blue-300 hover:text-white`}
      onClick={() => {
        const filtered = allRestArr.filter((restaurant) => restaurant.info.avgRating >= 4.5);
        setallRestArr(filtered);
        setActiveButton("ratings");
      }}
      >Ratings 4.5+</button>
      <button className={`border rounded-xl p-2 mx-4 hover:bg-blue-300`}
        onClick={()=>{
          setallRestArr(restArr);
          setActiveButton("all");
        }}
      >Reset</button>
       <input  className="border rounded-2xl p-2 mx-4" type="text" placeholder="Search Restaurants" 
        value={filter} 
        onChange={handleFilter}
       />
      <div className="mx-18">
        <RestaurantCard restArr={allRestArr}

        />
      </div>
    </div>
  );
}

export default Body;
