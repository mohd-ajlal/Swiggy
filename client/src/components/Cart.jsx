import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  function handleClear() {
    dispatch(resetCart());
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-orange-50 via-white to-green-50 px-6 py-12">
      <h1 className="text-center text-4xl font-extrabold text-gray-800 mb-12">
        🛒 Your <span className="text-green-600">Delicious Cart</span>
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-gray-600">Your cart is empty 🍽️</p>
      ) : (
        <>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {cartItems.map((foodItem) => {
              const info = foodItem.card.info;
              return (
                <div
                  key={info.id}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 flex flex-col justify-between border border-gray-100"
                >
                  <img
                    className="w-full h-48 object-cover rounded-xl mb-4 hover:scale-105 transition-transform"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400,h_300,c_fit/${info.imageId}`}
                    alt={info.name}
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">{info.name}</h2>
                    <p className="text-sm text-gray-500 mb-1">Category: {info.category || "N/A"}</p>
                    <p className="text-md font-semibold text-green-700">
                      ₹{info.defaultPrice ? info.defaultPrice / 100 : info.price / 100 || "N/A"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-12">
            <button
              onClick={handleClear}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              🧹 Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
