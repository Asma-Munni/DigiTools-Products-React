import React from 'react';
import Cart from '../Ui/Cart/Cart';

const AvailableProducts = ({carts, selectedCarts, setSelectedCarts}) => {
    console.log(carts)

    
  


    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
               {
            carts.map(cart => {
                console.log(cart)
                return <Cart 
                cart={cart} 
                selectedCarts={selectedCarts} setSelectedCarts={setSelectedCarts}></Cart>
            })
        }  
            </div>
        
          
        </div>
    );
};

export default AvailableProducts;