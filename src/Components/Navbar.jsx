import React from 'react';
import logo from "../assets/logo.svg"
import moonLogo from "../assets/Moon_fill.svg"

const Navbar = () => {
    return (
        <div className='bg-[#F9FAFBCC] h-[13vh] flex items-center border-b border-[#E5E7EB]'>
            <div className='w-[90%] mx-auto flex justify-between items-center'>
                <img className='w-[180px]' src={logo} alt="" />

                <div className='p-2 border border-[#E5E7EB] cursor-pointer hover:border-[#4D5562] rounded-xl'>
                    <img src={moonLogo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;