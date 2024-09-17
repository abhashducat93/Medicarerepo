import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const products = Array.from({ length: 16 }, (_, index) => ({
  id: index + 1,
  title: `Product ${index + 1}`,
  description: `Description for Product ${index + 1}`,
  price: 10 + index, // Just an example price
  img: 'https://via.placeholder.com/150', // Replace with actual images
  amount: 0,
}));

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleAddToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, amount: item.amount + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  const handleUpdateQuantity = (product, delta) => {
    setCart(cart.map(item => 
      item.id === product.id ? { ...item, amount: Math.max(1, item.amount + delta) } : item
    ));
  };

  const totalAmount = cart.reduce((total, item) => total + (item.price * item.amount), 0);
  const totalItems = cart.reduce((total, item) => total + item.amount, 0);

  const handleCheckout = () => {
    alert('Redirecting to payment gateway...');
    // Here, you would normally use a payment service's API (e.g., Stripe, PayPal)
  };

  return (
    <>
    <Navbar/>
        <div 
          className="fixed bottom-3 shadow-xl shadow-black border-2 border-black right-4 cursor-pointer text-4xl flex items-center z-40 bg-pink-500 rounded-full p-4" 
          onClick={() => setShowCheckout(!showCheckout)}
        >
          <FaShoppingCart className="text-white" />
          <span className="absolute top-0 right-1 bg-gray-800 text-white rounded-full px-2 text-sm ml-2">
            {totalItems}
          </span>
        </div>
      <div className="shop-container pt-20 relative min-h-screen">
        {/* Cart Icon */}

        {/* Checkout Popover */}
        {showCheckout && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center  z-50">
            <div className="bg-white p-8 rounded-xl text-center w-96 shadow-lg">
              <h2 className="text-2xl mb-4 text-teal-600">Cart</h2>
              {cart.length > 0 ? (
                <ul className="list-none mb-4 max-h-52 overflow-y-auto">
                  {cart.map(item => (
                    <li key={item.id} className="flex justify-between items-center mb-4 pb-2 border-b border-gray-300">
                      <img src={item.img} alt={item.title} className="w-12 h-12 object-cover mr-4 rounded" />
                      <div className="flex-grow text-left text-sm text-gray-800">
                        <span>{item.title}</span>
                        <span className="block">${item.price} x {item.amount}</span>
                      </div>
                      <div className="flex gap-1">
                        <button 
                          className="bg-teal-600 hover:bg-teal-800 text-white px-2 py-1 rounded text-xs"
                          onClick={() => handleUpdateQuantity(item, 1)}
                        >
                          +
                        </button>
                        <button 
                          className="bg-teal-600 hover:bg-teal-800 text-white px-2 py-1 rounded text-xs"
                          onClick={() => handleUpdateQuantity(item, -1)}
                        >
                          -
                        </button>
                        <button 
                          className="bg-teal-600 hover:bg-teal-800 text-white px-2 py-1 rounded text-xs"
                          onClick={() => handleRemoveFromCart(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Your cart is empty</p>
              )}
              <p className="text-lg mb-4 text-gray-800">Total Amount: ${totalAmount.toFixed(2)}</p>
              <div className='buttons space-x-6'>

              <button 
                className="bg-teal-600 hover:bg-teal-800 text-white px-4 py-2 rounded mb-2"
                onClick={() => setCart([])}
                >
                Clear Cart
              </button>
              <Link to="/checkout">
                <button 
                  className="bg-teal-600 hover:bg-teal-800 text-white px-4 py-2 rounded mb-2"
                  onClick={handleCheckout}
                  >
                  Proceed to Payment
                </button>
              </Link>
                    </div>
              <button 
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
                onClick={() => setShowCheckout(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-4 gap-5 mx-6 mt-14 z-30">
          {products.map(product => (
            <div className="card bg-white rounded-lg p-4 text-center shadow-lg transform transition-transform duration-300 hover:-translate-y-2" key={product.id}>
              <img src={product.img} alt={product.title} className="w-full h-auto rounded-lg mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-semibold text-gray-900 mb-4">Price: ${product.price}</p>
              <button 
                className="bg-teal-600 hover:bg-teal-800 text-white px-4 py-2 rounded  focus:outline-none focus:ring-2 focus:ring-blue-300"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Shop;
