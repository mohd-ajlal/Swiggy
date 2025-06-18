import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function RestaurantDetails() {
  const { id } = useParams();
  const API = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.87960&lng=78.07620&restaurantId=${id}&submitAction=ENTER`;

  const [restInfoDetails, setRestInfoDetails] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(API);
        const items =
          res.data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        setRestInfoDetails(items || []);
      } catch (err) {
        console.error("Failed to fetch menu:", err);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-orange-50 via-white to-green-50 px-4 py-10">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-10">
        🍴 Menu Items for Restaurant: <span className="text-green-600">{id}</span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {restInfoDetails.map((foodItem) => {
          const info = foodItem.card.info;
          return (
            <div
              key={info.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col justify-between"
            >
              <img
                className="w-full h-48 object-cover rounded-md mb-4"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${info.imageId}`}
                alt={info.name}
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800 mb-1">{info.name}</h2>
                <p className="text-sm text-gray-600 mb-1">
                  Category: {info.category || "N/A"}
                </p>
                <p className="text-md font-medium text-gray-700">
                  Price: ₹{info.defaultPrice ? info.defaultPrice / 100 : info.price / 100 || "N/A"}
                </p>
              </div>
              <button className="mt-4 bg-green-500 text-white font-semibold py-2 rounded hover:bg-green-600 transition-all">
                Add +
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RestaurantDetails;
