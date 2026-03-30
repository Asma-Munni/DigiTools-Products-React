import React from 'react';
import powerImg from '../../assets/power-dot.png'
import watchImg from '../../assets/Play.png'
import bannerImg from '../../assets/banner.png'

const Banner = () => {
    return (
        <div>
            <div className=' md:flex  justify-between items-center container mx-auto px-20 pt-20 '>
                <div className="left my-5 space-y-2">
                    <button className='flex items-center gap-1 bg-[#e1e7ff] rounded-2xl p-1 text-[#4f39f6]'>
                        <img src={powerImg} alt="" />
                        New: AI-Powered Tools Available</button>
                     <h2 className='text-[#101727] text-[72px] font-bold'>Supercharge Your <br /> Digital Workflow</h2>
                     <p className='text-[#627382]'>Access premium AI tools, design assets, templates, and productivity <br />
software—all in one place. Start creating faster today. <br />

Explore Products
</p>   
<div className='flex gap-2'>
    <button className="btn btn-active bg-gradient-to-r from-[#4f39f6] to-[#8c7dfd] rounded-4xl text-white ">Explore Products</button>

    <button className="btn btn-outline btn-primary rounded-4xl"><img src={watchImg} alt="" /> Watch Demo</button>
</div>
                </div>
                <div className="right">
                    <img className='w-[100%]' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;