import React from 'react';
import cartImg from '../../assets/cart.png'
import { MdDelete } from 'react-icons/md';
import toast from 'react-hot-toast';

const SelectedCarts = ({ selectedCarts, setSelectedCarts }) => {

const handleDeletedCart = (cart) =>{
    console.log(selectedCarts, "selectedCarts");
    const filteredCarts = selectedCarts.filter((selectedCart)=> selectedCart.id != cart.id);
     setSelectedCarts(filteredCarts);
};


const totalPrice = selectedCarts.reduce((total, item) => {
  const number = item.price.replace(/[^0-9.]/g, ""); 
  return total + Number(number);
}, 0);



  return (
    <div className="container mx-auto px-20 border border-gray-200 shadow-sm p-2 bg-[#ffffff]">
      
      <h3 className='font-bold text-2xl'>Your Cart</h3>

      {
        selectedCarts.length === 0 ? (
          <>
            <div className='flex flex-col justify-center items-center text-center p-1'>
              <img className='w-8' src={cartImg} alt="" />
            </div>
            <p className='text-center pb-10 text-[#627382]'>
              Your cart is empty
            </p>
          </>
        ) : (
          selectedCarts.map((cart, id) => (
            <div 
              key={id} 
              className='flex items-center justify-between gap-6 p-6 my-3 rounded-2xl border border-gray-200'
            >
              <div className='flex items-center gap-4'>
                <img className='w-12' src={cart.icon} alt="" />
                <div>
                  <h2>{cart.name}</h2>
                  <p>{cart.price}</p>
                </div>
              </div>

              <button 
              onClick={() => handleDeletedCart(cart)}
              className='btn text-red-500'>
                <MdDelete />
              </button>
            </div>
          ))
        )
      }

     
  {
  selectedCarts.length > 0 && (
    <div className='mt-6 border-t pt-4 space-y-3'>

      {/* Total Row */}
      <div className='flex justify-between items-center'>
        <h3 className='text-xl font-bold'>Total</h3>
        <h3 className='text-xl font-bold'>$ {totalPrice}</h3>
      </div>

      {/* Button Row */}
      <button 
        onClick={() => {
          setSelectedCarts([]);
          toast.success("Checkout complete 🎉");
        }}
        className='btn w-full bg-gradient-to-r from-[#4f39f6] to-[#8c7dfd] text-white rounded-xl'
      >
        Proceed to Checkout
      </button>

    </div>
  )
}

    </div>
  );
};

export default SelectedCarts;