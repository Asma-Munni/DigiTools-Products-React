import React, { useState } from 'react';
import writtingImg from '../../../assets/writting.png';
import checkImg from '../../../assets/Check.png';

const Cart = ({ cart, selectedCarts, setSelectedCarts }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    
    const exists = selectedCarts.find(item => item.id === cart.id);

    if (!exists) {
      setSelectedCarts([...selectedCarts, cart]);
      setIsAdded(true);
      alert(`${cart.name} is Added`);
    }
  };

  return (
    <div className='border border-2 border-gray-200 rounded-xl p-3 shadow-lg relative space-y-3 h-full'>

      
      <button 
        className={`btn rounded-2xl text-left absolute top-5 right-5 cursor-pointer
        ${cart.tag === "best seller" 
          ? 'bg-[#fef3c6] text-[#bb4d00]' 
          : cart.tag === "popular" 
          ? 'bg-[#E1E7FF] text-[#4f39f6]' 
          : cart.tag === "new" 
          ? 'bg-[#dbfce7] text-[#0a883e]' 
          : ""
        }`}
      >
        {cart.tag}
      </button>

      
      <img className='mt-10 w-20' src={cart.icon} alt="" />

      
      <h3 className='font-bold text-2xl'>{cart.name}</h3>

      
      <p>{cart.description}</p>

      
      <p className='font-semibold'>Price: {cart.price}</p>

      
      <div className='space-y-1'>
        {
          cart.features.map((feature, index) => (
            <p key={index} className='flex items-center gap-2'>
              <img className='w-4' src={checkImg} alt="" />
              {feature}
            </p>
          ))
        }
      </div>

      
      <button 
        onClick={handleClick}
        className={`btn rounded-xl text-white w-full
          ${isAdded 
            ? 'bg-green-700 hover:bg-green-800' 
            : 'bg-gradient-to-r from-[#4f39f6] to-[#8c7dfd]'
          }`}
      >
        {isAdded ? 'Added to Cart' : 'Buy Now'}
      </button>

    </div>
  );
};

export default Cart;