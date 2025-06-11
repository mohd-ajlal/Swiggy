function RestaurantCard({ restArr }) {
  console.log(restArr, "restArr");

  return (
    <div className="flex flex-wrap gap-6 justify-center w-11/12 mx-auto py-6">
      {restArr.map((restDetails) => (
        <div
          key={restDetails.info.id}
          className="bg-white shadow-lg rounded-2xl w-80 p-4 transition-transform hover:scale-105"
        >
          <img
            className="w-full h-48 object-cover rounded-xl"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/${restDetails.info.cloudinaryImageId}`}
            alt={restDetails.info.name}
          />
          <h2 className="font-semibold text-xl mt-3">{restDetails.info.name}</h2>
          <div className="flex items-center text-sm text-gray-600 mt-1 ml-1">
            <span className="mr-3">⭐ {restDetails.info.avgRating}</span>
            <span>{restDetails.info.sla.slaString}</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">{restDetails.info.cuisines.join(", ")}</p>
          <p className="text-sm text-gray-400">{restDetails.info.locality}</p>
        </div>
      ))}
    </div>
  );
}

export default RestaurantCard;
