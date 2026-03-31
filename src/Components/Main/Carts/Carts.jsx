import React, { useEffect, useState } from 'react';
import AvailableProducts from '../../AvailableProducts/AvailableProducts';
import SelectedCarts from '../../SelectedCarts/SelectedCarts';

const Carts = ({ cartPromise, selectedCarts, setSelectedCarts}) => {
  const [carts, setCarts] = useState([]);
  const [productType, setProductType] = useState("Products");

  useEffect(() => {
    cartPromise.then(data => setCarts(data));
  }, [cartPromise]);

 // const [selectedCarts, setSelectedCarts]=useState([]);

  



  return (
    <div className='container mx-auto px-20 mb-20 bg-[#f9fafc]'>
      <div className='text-center space-y-2 mt-20 mb-8'>
        <h3 className='font-extrabold text-[3rem]'>Premium Digital Tools</h3> 
        <p className='text-[#627382]'>
          Choose from our curated collection of premium digital products designed <br />
          to boost your productivity and creativity.
        </p>

        <div className="space-x-2">
          <button
            onClick={() => setProductType('Products')}
            className={`btn rounded-4xl ${
              productType === 'Products'
                ? 'bg-gradient-to-r from-[#4f39f6] to-[#8c7dfd] text-white'
                : 'btn-outline'
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setProductType('Cart')}
            className={`btn rounded-4xl ${
              productType === 'Cart'
                ? 'bg-gradient-to-r from-[#4f39f6] to-[#8c7dfd] text-white'
                : 'btn-outline'
            }`}
          >
            Cart ({selectedCarts.length})
          </button>
        </div>
      </div>

      {productType === 'Products'
        ? <AvailableProducts 
        carts={carts}
        setSelectedCarts={setSelectedCarts}
        selectedCarts={selectedCarts} />
        : <SelectedCarts selectedCarts={selectedCarts} />
      }
    </div>
  );
};

export default Carts;  