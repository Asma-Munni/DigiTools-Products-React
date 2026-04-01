import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-gradient-to-r from-[#4f39f6] to-[#8c7dfd]'>

            <div className=" my-5 space-y-2 p-5  text-center">

                <h2 className='text-[#ffffff] text-2xl font-bold pt-15'>Ready to Transform Your Workflow?</h2>
                <p className='text-[#ffffff]'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today. <br />

                    Explore Products
                </p>
                <div className='flex gap-2 justify-center items-center pt-5'>
                    <button className="btn btn-active bg-white rounded-full">
                        <span className="bg-gradient-to-r from-[#4f39f6] to-[#8c7dfd] bg-clip-text text-transparent">
                            Explore Products
                        </span>
                    </button>

                    <button className="btn btn-outline btn-primary rounded-4xl bg-transparent text-white">View Pricing</button>
                    
                </div>
                 <p className='text-white text-center pb-15'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>



        </div>
    );
};

export default Workflow;