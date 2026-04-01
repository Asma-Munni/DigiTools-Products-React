import React from 'react';

const Rating = () => {
    return (
        <div>
            <div className='flex flex-wrap bg-gradient-to-r from-[#4f39f6] to-[#8c7dfd] justify-between items-center text-white mt-20 px-20'>
                <div>
                    <h3 className='text-[60px] font font-extrabold'>50K+</h3>
                    <p className='text-[24px] font-medium'>ActiveUsers</p>
                    </div>
                     <div>
                    <h3 className='text-[60px] font font-extrabold'>200+</h3>
                    <p className='text-[24px] font-medium'>Premium Tools</p>
                    </div>
                     <div>
                    <h3 className='text-[60px] font font-extrabold'>4.9</h3>
                    <p className='text-[24px] font-medium'>Rating</p>
                    </div>
            </div>
        </div>
    );
};

export default Rating;