import React from 'react'
function Banner2() {
    return (
        <div className='w-full h-[100vh] bg-black flex  max-md:flex-wrap  max-md:mt-[-400px] '>

            <div className="w-[49.9%] h-full bg-gray-300 overflow-hidden hover:duration-1000  hover:opacity-50">
                <img className='object-cover w-full h-full hover:scale-105 hover:duration-1000  duration-1000' src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Innovation/dw50/dw50-00-teaser-hd.jpg?imwidth=1280" alt="" />
                <div className="w-[600px] h-[70px] pl-[30px] mt-[-100px] absolute">
                    <h2 className='text-[20px] text-white font-semibold'>BMW lIFEsTYLE</h2>
                    <p className='text-[18px] text-white '> sit amet consectetur adipisicing elit. Quidem, dignissimos!</p>
                </div>
            </div>
            <div className="w-[49.9%] ml-[3px] h-full bg-gray-900 hover:duration-1000 overflow-hidden hover:opacity-70">
                <img className='object-cover w-full bg-center  h-full hover:scale-105 hover:duration-1000  duration-1000' src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/sustainability/greenest-car/gc-00-teaser-hd.jpg?imwidth=1280" alt="" />
                <div className="w-[600px] h-[70px] pl-[30px] mt-[-100px] absolute">
                    <h2 className='text-[20px] text-white font-semibold'>BMW lIFEsTYLE</h2>
                    <p className='text-[18px] text-white '> sit amet consectetur adipisicing elit. Quidem, dignissimos!</p>
                </div>
            </div>

        </div>
    )
}

export default Banner2