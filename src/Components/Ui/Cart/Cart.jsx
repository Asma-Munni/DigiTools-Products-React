import React from 'react';
import writtingImg from '../../../assets/writting.png'
import checkImg from '../../../assets/Check.png'


const Cart = ({cart}) => {
    return (
        <div>
            <div className='border border-gray-400 rounded-xl p-2 shadow-lg relative space-y-2 h-full'>
                <button 
  className={`btn rounded-2xl text-left absolute top-5 right-5 cursor-pointer
  ${cart.tag === "best seller" 
    ? 'bg-[#fef3c6] text-[#bb4d00]' 
    : cart.tag === "popular" 
    ? 'bg-[#E1E7FF] text-[#4f39f6]' 
    : cart.tag === "new" 
    ? 'bg-[#dbfce7] text-[#0a883e]' : ""
  }`}
>
  {cart.tag}
</button>
              
                <img className='mt-10' src={writtingImg} alt="" />
                <h3 className='font-bold text-2xl'>{cart.name}</h3>
                <p>{cart.description}</p>
                <p>Price: {cart.price}</p>
                <div>
                   {
                    cart.features.map((feature) => (
                       
                        <p className='flex items-center gap-2'>
                             <img src={checkImg} alt="" />
                            {feature}
                        </p>
                    ))
                   }
                </div>
                <button className="btn btn-active bg-gradient-to-r from-[#4f39f6] to-[#8c7dfd] rounded-4xl text-white w-full">Buy Now</button>
            </div>
        </div>
    );
};

export default Cart; 