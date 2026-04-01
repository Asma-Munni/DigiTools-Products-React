import React from 'react';
import checkImg from '../../assets/Check.png'

const SimplePricing = () => {
    return (
        <div>
            <div>
                <div className='text-center space-y-2 mt-20 mb-8'>
                    <h3 className='font-extrabold text-[3rem]'>
                        Simple, Transparent Pricing
                    </h3> 
                    <p className='text-[#627382]'>
                        Choose the plan that fits your needs. Upgrade or downgrade anytime.
                    </p>
                </div>

                
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-10 max-w-6xl mx-auto'>

                    
                    <div className='border border-gray-200 rounded-xl p-5 shadow-md space-y-3 bg-white '>
                        <h3 className='text-lg font-semibold'>Starter</h3>
                        <p className='text-sm text-gray-500'>Perfect for getting started</p>

                        <p className='text-4xl font-bold'>$0 <span className='text-base font-normal'>/Month</span></p>

                        <div className='space-y-2 text-sm'>
                            <p className='flex items-center gap-2'><img src={checkImg} className='w-4' /> Access to 10 free tools</p>
                            <p className='flex items-center gap-2'><img src={checkImg} className='w-4' /> Basic templates</p>
                            <p className='flex items-center gap-2'><img src={checkImg} className='w-4' /> Community support</p>
                            <p className='flex items-center gap-2'><img src={checkImg} className='w-4' /> 1 project per month</p>
                        </div>

                        <button className="btn bg-gradient-to-r from-[#4f39f6] to-[#8c7dfd] rounded-full text-white w-full">
                            Get Started Free
                        </button>
                    </div>

                    
                    <div className='border border-gray-200 rounded-xl p-5 shadow-lg space-y-3 relative bg-gradient-to-r from-[#4f39f6] to-[#8c7dfd] text-white scale-105'>
                        
                        {/* Badge */}
                        <button className='absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm'>
                            Most Popular
                        </button>

                        <h3 className='text-lg font-semibold'>Pro</h3>
                        <p className='text-sm opacity-80'>Best for professionals</p>

                        <p className='text-4xl font-bold'>$29 <span className='text-base font-normal'>/Month</span></p>

                        <div className='space-y-2 text-sm'>
                            <p className='flex items-center gap-2'><img src={checkImg} className='w-4' /> Access to all premium tools</p>
                            <p className='flex items-center gap-2'><img src={checkImg} className='w-4' /> Unlimited templates</p>
                            <p className='flex items-center gap-2'><img src={checkImg} className='w-4' /> Priority support</p>
                            <p className='flex items-center gap-2'><img src={checkImg} className='w-4' /> Unlimited projects</p>
                            <p className='flex items-center gap-2'><img src={checkImg} className='w-4' /> Cloud sync</p>
                            <p className='flex items-center gap-2'><img src={checkImg} className='w-4' /> Advanced analytics</p>
                        </div>

                        <button className="btn bg-white text-black rounded-full w-full">
                            Start Pro Trial
                        </button>
                    </div>

                    
                    <div className='border border-gray-200 rounded-xl p-5 shadow-md space-y-3 bg-white'>
                        <h3 className='text-lg font-semibold'>Enterprise</h3>
                        <p className='text-sm text-gray-500'>For teams and businesses</p>

                        <p className='text-4xl font-bold'>$99 <span className='text-base font-normal'>/Month</span></p>

                        <div className='space-y-2 text-sm'>
                            <p className='flex items-center gap-2'><img src={checkImg} className='w-4' /> Everything in Pro</p>
                            <p className='flex items-center gap-2'><img src={checkImg} className='w-4' /> Team collaboration</p>
                            <p className='flex items-center gap-2'><img src={checkImg} className='w-4' /> Custom integrations</p>
                            <p className='flex items-center gap-2'><img src={checkImg} className='w-4' /> Dedicated support</p>
                            <p className='flex items-center gap-2'><img src={checkImg} className='w-4' /> SLA guarantee</p>
                            <p className='flex items-center gap-2'><img src={checkImg} className='w-4' /> Custom branding</p>
                        </div>

                        <button className="btn bg-gradient-to-r from-[#4f39f6] to-[#8c7dfd] rounded-full text-white w-full">
                            Contact Sales
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SimplePricing;