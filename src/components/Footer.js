import React from 'react'

function Footer() {
    return (
        <div className='w-full h-screen bg-[#262626] max-md:mt-[-100px] max-md:absolute'>
            <div className="w-[80%] m-auto h-full bg-[#262626]">
                <div className="w-full h-[150px]  bg-[#262626] flex items-center ">
                    <p className='text-[18px] text-white pl-[10px]'>English</p>
                    <p className='text-[18px] text-gray-400 pl-[30px]'> Deutsch</p>
                    <p className='text-[18px] text-gray-400 pl-[30px]'>Italiano</p>
                    <p className='text-[18px] text-gray-400 pl-[30px]'>Français</p>
                    <p className='text-[18px] text-gray-400 pl-[30px]'>Español</p>
                    <p className='text-[18px] text-gray-400 pl-[30px]'>日本語</p>

                </div>
                <div className="w-full h-[550px] bg-[#262626 ] flex">
                    <div className="w-[25%] h-full bg-[#262626] max-md:hidden  leading-7">
                        <h2 className='text-white'>Quick Links</h2>
                        <div className="w-[200px] h-[1px] mt-[20px] bg-gray-300"></div>
                        <a className='mt-[30px] text-white' href="#">Home</a>
                        <br />
                        <a className='text-gray-400 mt-[20px]' href="#">BMW in your country</a>
                        <br />
                        <a className='text-gray-400' href="#">BMW Group Careers</a>
                        <br />
                        <a className='text-gray-400' href="#">EU Detergents</a>
                        <br />
                        <a className='text-gray-400' href="#">Regulation</a>
                        <br />
                        <a className='text-gray-400' href="#">REACH Regulation</a>
                        <br />
                        <a className='text-gray-400' href="#">Compatibility Check</a>
                        <br />
                        <a className='text-gray-400' href="#">Software Update</a>
                        <br />
                        <a className='text-gray-400' href="#">Accessories Update</a>
                        <br />
                        <a className='text-gray-400' href="#">Connected Test Vehicle</a>
                        <br />
                        <a className='text-gray-400' href="#">Service Page Charging</a>
                        <br />
                        <a className='text-gray-400' href="#">Products</a>
                        <br />
                        <a className='text-gray-400' href="#">© BMW AG 2023</a>
                    </div>


                    <div className="w-[25%] h-full bg-[#262626]   leading-7 ml-[20px]">
                        <h2 className='text-white'>
                            More BMW Websites</h2>
                        <div className="w-[200px] h-[1px] mt-[20px] bg-gray-300"></div>
                        <a className='mt-[30px] text-white' href="#">BMW M</a>
                        <br />
                        <a className='text-gray-400 mt-[20px]' href="#">BMW Motorsport</a>
                        <br />
                        <a className='text-gray-400' href="#">BMW Golfsport</a>
                        <br />
                        <a className='text-gray-400' href="#">BMW Driving Experience</a>
                        <br />
                        <a className='text-gray-400' href="#">BMW Welt</a>
                        <br />
                        <a className='text-gray-400' href="#">BMW Group Classic</a>
                        <br />
                        <a className='text-gray-400' href="#">BMW Corporate/Direct</a>
                        <br />
                        <a className='text-gray-400' href="#">Sales</a>
                        <br />
                        <a className='text-gray-400' href="#">BMW Group</a>
                        <br />
                        <a className='text-gray-400' href="#">BMW Group Culture</a>
                    </div>



                    <div className="w-[25%] h-full bg-[#262626] max-md:hidden leading-7 ml-[20px]">
                        <h2 className='text-white'>BMW.com</h2>
                        <div className="w-[200px] h-[1px] mt-[20px] bg-gray-300"></div>
                        <a className='mt-[30px] text-white' href="#">About BMW.com</a>
                        <br />
                        <a className='text-gray-400 mt-[20px]' href="#">Contact</a>
                        <br />
                        <a className='text-gray-400' href="#">Cookies</a>
                        <br />
                        <a className='text-gray-400' href="#">Imprint</a>
                        <br />
                        <a className='text-gray-400' href="#">Legal Notice / Data</a>
                        <br />
                        <a className='text-gray-400' href="#">protection</a>
                    </div>




                    <div className="w-[25%] h-full bg-[#262626] max-md:ml-[200px]  leading-7 ml-[20px]">
                        <h2 className='text-white'>Visit us on</h2>
                        <div className="w-[200px] h-[2px] mt-[20px] bg-gray-300"></div>
                        <a className='mt-[30px] text-white' href="#">Facebook</a>
                        <br />
                        <a className='text-gray-400 mt-[20px]' href="#">Twitter</a>
                        <br />
                        <a className='text-gray-400' href="#">Instagram</a>
                        <br />
                        <a className='text-gray-400' href="#">YouTube</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer