import React from 'react'

function Small() {
    return (
        <div className='w-[100%] h-[1000px] flex flex-col max-md:mt-[700px] max-md:flex-wrap'>
            <div className="w-[100%] h-[52%] flex justify-between">
                <div className="flex flex-col justify-between h-[100%] w-[32.9%]">
                    <div className="w-[100%] h-[49.8%] overflow-hidden">
                        <img className='h-[100%] hover:scale-110 duration-[3000ms] hover:brightness-[30%] hover:contrast-[100%] cursor-pointer' src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Design/4-Zylinder/4Z-00-teaser-hd.jpg?imwidth=768" alt="" />
                    </div>
                    <div className="w-[100%] h-[49.8%] overflow-hidden">
                        <img className='h-[100%] hover:scale-110 duration-[3000ms] hover:brightness-[30%] hover:contrast-[100%] cursor-pointer' src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Innovation/tantris/ts-00-teaser-hd.jpg?imwidth=768" alt="" />
                    </div>
                </div>
                <div className="h-[100%] w-[66.9%] overflow-hidden">
                    <img className='w-[100%] h-[100%] hover:scale-110 duration-[2000ms] hover:brightness-[30%] hover:contrast-[100%] cursor-pointer' src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Design/Giorgio-Giugiaro-meets-Adrian-van-Hooydonk/gg-00-teaser-hd.jpg?imwidth=1280" alt="" />
                </div>
            </div>
            <div className='w-full h-[31%] max-md:mt-[-350px] flex'>
                <div className="w-[33%] h-full  hover:duration-1000 overflow-hidden  hover:opacity-70 border-[2px] border-white relative">
                    <img className='w-full object-cover hover:scale-105 hover:duration-1000  duration-1000' src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/performance/cd/cd-00-teaser-hd.jpg?imwidth=768" alt="" />
                    <div className="w-[600px] h-[70px]   pl-[30px] mt-[-100px] absolute">
                        <h2 className='text-[20px] text-white font-semibold'>BMW lIFEsTYLE</h2>
                        <p className='text-[18px] text-white '> sit amet consectetur adipisicing elit. Quidem, dignissimos!</p>
                    </div>
                </div>
                <div className="w-[34%] h-[90%] border-[2px] border-white relative hover:duration-1000 overflow-hidden  hover:opacity-70  ">
                    <img className='w-full object-cover hover:scale-105 hover:duration-1000  duration-1000' src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Innovation/gbi3/gbi3-00-teaser-hd.jpg?imwidth=768" alt="" />
                    <div className="w-[600px] h-[70px]   pl-[30px] mt-[-100px] absolute">
                        <h2 className='text-[20px] text-white font-semibold'>BMW lIFEsTYLE</h2>
                        <p className='text-[18px] text-white '> sit amet consectetur adipisicing elit. Quidem, dignissimos!</p>
                    </div>
                </div>
                <div className="w-[33%] hover:duration-1000 overflow-hidden  hover:opacity-70 h-full  border-[2px] border-white relative">
                    <img className='w-full object-cover hover:scale-105 hover:duration-1000  duration-1000' src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Innovation/fat-bw/fat-bw-00-teaser-hd.jpg?imwidth=768" alt="" />
                    <div className="w-[600px] h-[70px]   pl-[30px] mt-[-100px] absolute">
                        <h2 className='text-[20px] text-white font-semibold'>BMW lIFEsTYLE</h2>
                        <p className='text-[18px] text-white '> sit amet consectetur adipisicing elit. Quidem, dignissimos!</p>
                    </div>
                </div>
            </div>

            <button className='w-[400px] h-[55px] m-auto border-[3px] border-black font-medium text-[20px]'>Show more</button>
        </div>
    )
}

export default Small