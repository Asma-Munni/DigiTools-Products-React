import React from 'react';
import groupImg from '../../assets/group.png'
import groupImg2 from '../../assets/group2.png'
import groupImg3 from '../../assets/group3.png'


const Started = () => {
    return (
        <div className=''>
            <div className='bg-[#f9fafc] py-20 '>
                <div className='text-center space-y-3'>
                    <h3 className='font-extrabold text-[3rem]  '>Get Started in 3 Steps</h3>
                <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
               </div>

               <div className='flex flex-col md:flex justify-between gap-5 px-20 mt-8'>
                <div className='border border-gray-200 shadow-sm rounded-2xl relative  '>
                 <button className="btn btn-active bg-gradient-to-r from-[#4f39f6] to-[#8c7dfd] rounded-full text-white absolute top-3 right-3">01</button> 
                 <div className='flex flex-col items-center justify-center py-20 space-y-2 text-center p-4'>
                    <img src={groupImg} alt="" /> 
                 <h4 className='text-[#101727] text-2xl font-bold'>Create Account</h4> 
                 <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p> </div>
                 
                </div>
                 <div className='border border-gray-200 shadow-2xl rounded-2xl relative'>
                 <button className="btn btn-active bg-gradient-to-r from-[#4f39f6] to-[#8c7dfd] rounded-full text-white absolute top-3 right-3">02</button> 
                 <div className='flex flex-col items-center justify-center py-20 space-y-2 text-center p-4'>
                    <img src={groupImg2} alt="" /> 
                 <h4 className='text-[#101727] text-2xl font-bold'>Choose Products</h4> 
                 <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p> </div>
                 
                </div>
                 <div className='border border-gray-200 shadow-2xl rounded-2xl relative'>
                 <button className="btn btn-active bg-gradient-to-r from-[#4f39f6] to-[#8c7dfd] rounded-full text-white absolute top-3 right-3">03</button> 
                 <div className='flex flex-col items-center justify-center py-20 space-y-2 p-4 text-center'>
                    <img src={groupImg3} alt="" /> 
                 <h4 className='text-[#101727] text-2xl font-bold'>Start Creating</h4> 
                 <p className='text-[#627382]'>Download and start using your premium tools immediately.</p> </div>
                 
                </div>
               </div>
                
            </div>
        </div>
    );
};

export default Started;