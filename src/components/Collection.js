import React from 'react'

function Collection() {
    return (
        <div className='w-[100%] h-[850px] flex flex-col max-md:mt-[700px] max-md:flex-wrap'>
            <div className="w-[100%] h-[67%] flex justify-between">
                <div className="flex flex-col justify-between h-[100%] w-[32.9%]">
                    <div className="w-[100%] h-[49.8%] overflow-hidden">
                        <img className='h-[100%] hover:scale-110 duration-[3000ms] hover:brightness-[30%] hover:contrast-[100%] cursor-pointer' src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/sustainability/creativeminds/sus-00-teaser-hd.jpg?imwidth=768" alt="" />
                    </div>
                    <div className="w-[100%] h-[49.8%] overflow-hidden">
                        <img className='h-[100%] hover:scale-110 duration-[3000ms] hover:brightness-[30%] hover:contrast-[100%] cursor-pointer' src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Innovation/gbi3/gbi3-00-teaser-hd.jpg?imwidth=768" alt="" />
                    </div>
                </div>
                <div className="h-[100%] w-[66.9%] overflow-hidden">
                    <img className='w-[100%] h-[100%] hover:scale-110 duration-[2000ms] hover:brightness-[30%] hover:contrast-[100%] cursor-pointer' src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/sustainability/greenest-car/gc-00-teaser-hd.jpg?imwidth=1280" alt="" />
                </div>
            </div>
            <div className='w-full h-[33%] max-md:mt-[-350px] flex'>
                <div className="w-[33%] h-full  hover:duration-1000 overflow-hidden  hover:opacity-70 border-[2px] border-white relative">
                    <img className='w-full object-cover hover:scale-105 hover:duration-1000  duration-1000' src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude-forever/issue-1/ss-00-teaser-hd.jpg?imwidth=768" alt="" />
                    <div className="w-[600px] h-[70px]   pl-[30px] mt-[-100px] absolute">
                        <h2 className='text-[20px] text-white font-semibold'>BMW lIFEsTYLE</h2>
                        <p className='text-[18px] text-white '> sit amet consectetur adipisicing elit. Quidem, dignissimos!</p>
                    </div>
                </div>
                <div className="w-[34%] h-full  border-[2px] border-white relative hover:duration-1000 overflow-hidden  hover:opacity-70  ">
                    <img className='w-full object-cover hover:scale-105 hover:duration-1000  duration-1000' src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Design/frieze/fz-00-teaser-hd.jpg?imwidth=768" alt="" />
                    <div className="w-[600px] h-[70px]   pl-[30px] mt-[-100px] absolute">
                        <h2 className='text-[20px] text-white font-semibold'>BMW lIFEsTYLE</h2>
                        <p className='text-[18px] text-white '> sit amet consectetur adipisicing elit. Quidem, dignissimos!</p>
                    </div>
                </div>
                <div className="w-[33%] hover:duration-1000 overflow-hidden  hover:opacity-70 h-full  border-[2px] border-white relative">
                    <img className='w-full object-cover hover:scale-105 hover:duration-1000  duration-1000' src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/automotive-life/with-kyoto-i4m50/com_220706_withbmw_kyoto_hd.jpg?imwidth=768" alt="" />
                    <div className="w-[600px] h-[70px]   pl-[30px] mt-[-100px] absolute">
                        <h2 className='text-[20px] text-white font-semibold'>BMW lIFEsTYLE</h2>
                        <p className='text-[18px] text-white '> sit amet consectetur adipisicing elit. Quidem, dignissimos!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection