import React from 'react';
import cartImg from '../../assets/cart.png'

const SelectedCarts = ({selectedCarts}) => {
    console.log(selectedCarts)
    return (
        <div>
            <div className=" container mx-auto px-20 border border-gray-200 shadow-sm p-2 bg-[#ffffff]">
            <h3 className='font-bold text-2xl'>Your Cart</h3>
            <div className='flex flex-col justify-center items-center text-center p-1'>
                <img className='w-8' src={cartImg} alt="" /></div>
                <p className='text-center pb-10 text-[#627382]'>Your cart is empty</p>
        </div> 
        </div>
    );
};

export default SelectedCarts;