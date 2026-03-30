import React, { use, useState } from 'react';
import AvailableProducts from '../../AvailableProducts/AvailableProducts';


const Carts = ({cartPromise}) => {
   console.log(cartPromise);
   const carts = use(cartPromise);
   console.log(carts);
   const [productType, setProductType] = useState("Products");
   console.log(productType);
    return (
        <div>
            <div className='text-center space-y-2 mt-20 mb-8'>
               <h3 className='font-extrabold text-[3rem]'>Premium Digital Tools</h3> 
               <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
               <div>
                <button 
                onClick={() =>setProductType('Products')}
                className={`btn ${productType=== 'Products' ? 'bg-gradient-to-r from-[#4f39f6] to-[#8c7dfd] rounded-4xl text-white' : 'bg-white btn'} btn-active  `}>Products</button>
                <button 
                 onClick={() =>setProductType('Cart')}
                className={`btn ${productType=== 'Cart' ? 'bg-gradient-to-r from-[#4f39f6] to-[#8c7dfd] rounded-4xl text-white' : 'bg-white btn'}btn-outline rounded-4xl`}>Cart(2)</button>

               </div>
            </div>


           <AvailableProducts carts ={carts}></AvailableProducts>
        </div>
    );
};

export default Carts;