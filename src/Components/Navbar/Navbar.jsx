import React from 'react';
import cartImg from '../../assets/cart.png'

const Navbar = ({selectedCarts}) => {
    return (
        <div>
          <div className='flex justify-between items-center container mx-auto px-20 pt-3'>
            <h1 className='text-5xl font-bold bg-gradient-to-r from-[#4f39f6] to-[#8474fd] bg-clip-text text-transparent'>DigiTools</h1>
            <ul className='hidden md:flex gap-3 font-semibold'>
                
                <li><a href="">Products</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Testimonials</a></li>
                <li><a href="">FAQ</a></li>
            </ul>
            <div className='flex gap-2 items-center relative'>
                <img className='w-6 h-6 ' src={cartImg} alt="" />
                 {selectedCarts.length > 0 && (
              <span className="badge badge-sm indicator-item bg-red-500 w-4 h-4 absolute top-0 right-36 text-white">{selectedCarts.length}</span>
            )}


                <p>Login</p>
                <button className="btn btn-active bg-gradient-to-r from-[#4f39f6] to-[#8c7dfd] rounded-4xl text-white ">Get Started</button>
            </div>
          </div>
        </div>
    );
};

export default Navbar;