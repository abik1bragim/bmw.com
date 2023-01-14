import React from 'react'
import { AiOutlineSearch } from "react-icons/ai"
function Navbar() {
    return (
        <div className="banner">
            <div className='img'>
                <div className="w-[55%] ml-[25%] h-[170px] bg-transparent pt-[20px]">
                    <ul className='flex max-md:hidden h-[50px] items-center'>
                        <li className='text-[18px] text-white hover:text-blue-600 font-semibold pl-[20px]'>Magazine</li>
                        <li className='text-[18px] text-white hover:text-blue-600 font-semibold pl-[30px]'>Podcasts</li>
                        <li className='text-[18px] text-white  hover:text-blue-600 font-semibold pl-[30px]'>Esports</li>
                        <li className='text-[18px] text-white hover:text-blue-600 font-semibold pl-[30px]'>Models</li>
                        <li className='text-[26px] text-white hover:text-blue-600 font-semibold pl-[30px]'><AiOutlineSearch /></li>
                        <li className='text-[12px] text-white hover:text-blue-600 font-semibold pl-[20px]'>BMW in your country</li>
                        <li className='text-[18px] text-white  hover:text-blue-600 font-semibold ml-[20px] pl-[30px] mt-[30px]'><img src="https://www.bmw.com/etc.clientlibs/settings/wcm/designs/bmwcom/base/resources/ci2020/img/logo-light.svg" alt="" /></li>
                    </ul>
                    <div className="w-[78%] h-[2px]  bg-white"></div>
                    <h3 className='text-[15px] text-white font-semibold pl-[57%] pt-[5px]'>Sheer Driving Pleasure</h3>
                </div>

                <div className="w-[800px] h-[250px] bg-transparent  mt-[7%] ml-[5%]">
                    <p className='text-[25px] text-white '>\\ welcome to  my hub //</p>
                    <h1 className='text-[60px] text-white'>\\ hi  i`m Dell //</h1>
                    <button className='w-[200px] h-[50px] text-[18px] text-white font-semibold mt-[20px] hover:bg-white hover:text-black border-[2px] border-white'>Read more</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar