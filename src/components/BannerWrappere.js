import React from 'react'

function BannerWrappere() {
    return (
        <div className="w-full h-[850px] mt-[100px]  max-md:mt-[-250px] max-md:h-[500px] border">

            <div className='w-full h-[550px] border-2 border-blue-600 bg-[#262626] overflow-hidden flex  max-md:flex-wrap'>

                <div className="w-[32%] h-full">
                    <h1 className='text-[43px] leading-10 font-semibold pl-[70px] pt-[50px] text-white max-md:w-[1000px]'>THE BMW <br /> PODCAST: <br /> CHANGING <br /> LANES </h1>
                    <p className='pl-[70px] leading-5 font-semibold text-white pt-[20px] max-md:w-[900px]'>"Changing Lanes” is the official podcast of <br /> BMW. Featuring new episodes each week, <br /> in which our hosts take you on exciting <br /> journeys and talk about innovative <br /> technologies, lifestyle, design, cars and <br /> more. Find and subscribe to Changing <br /> Lanes on all major podcasting platforms.</p>
                    <button className='w-[200px] h-[55px] text-[20px] font-semibold text-white border-[2px] border-white bg-transparent  hover:bg-white hover:text-black ml-[70px] mt-[20px]'>Listen now</button>
                </div>
                <div className="w-[75%] h-full bg-[#262626] flex pt-[50px] overflow-hidden max-md:mt-[900px] max-md:ml-[-70px]" >
                    <div className="w-[300px] h-[65%]  bg-[#262626] ml-[10px] overflow-hidden hover:duration-1000  hover:opacity-70">
                        <img className='h-[100%] hover:scale-105 hover:duration-1000 duration-1000' src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/podcasts/greenest-car-lp/gcl-episode-7-teaser-high.jpg?imwidth=768" alt="" />
                    </div>
                    <div className="w-[300px] h-[65%] bg-[#262626] ml-[10px] overflow-hidden hover:duration-1000  hover:opacity-70">
                        <img className='h-[100%] hover:scale-105 hover:duration-1000  duration-1000' src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/podcasts/greenest-car-lp/gcl-episode-6-teaser-high.jpg?imwidth=768" alt="" />
                    </div>
                    <div className="w-[300px] h-[65%] ml-[10px] overflow-hidden hover:duration-1000  hover:opacity-70">
                        <img className='h-[100%] hover:scale-105 hover:duration-1000  duration-1000' src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/podcasts/greenest-car-lp/gcl-episode-5-teaser-high.jpg?imwidth=768" alt="" />
                    </div>
                    <div className="w-[300px] h-[65%] ml-[10px] overflow-hidden hover:duration-1000  hover:opacity-70">
                        <img className='h-[100%] hover:scale-105 hover:duration-1000  duration-1000' src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/podcasts/greenest-car-lp/gcl-episode-4-teaser-high.jpg?imwidth=768" alt="" />
                    </div>
                </div>

            </div>
            <p className='text-center text-[35px] pt-[30px]'>BMW in your country</p>
            <h1 className='text-center text-[75px] '>ALL BMW MODELS</h1>
            <h2 className='text-center text-[35px] font-bold'>Find your BMW</h2>
        </div>
    )
}

export default BannerWrappere