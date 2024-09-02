import React from 'react';
import uploadLogo from "../assets/exit.svg"

const MainPage = () => {
    return (
        <div className='h-[87vh] bg-[#F9FAFBCC] dark:bg-[#121826] flex justify-center items-center'>
            <div className="containerBox w-[50%] h-[400px] shadow-2xl bg-white dark:bg-gray-800 rounded-lg mx-auto flex justify-center items-center">
                <div className='w-[98%] h-[96%] rounded-lg border-2 border-dashed border-[#E5E7EB] flex flex-col justify-center items-center space-y-3 cursor-pointer hover:opacity-60 hover:shadow-3xl'>
                    <img className='w-[40px] mb-2' src={uploadLogo} alt="" />
                    <p className='text-[#121826] dark:text-[#F9FAFBCC] text-[14px] font-semibold'> 
                        Drag & Drop a file or <span className='text-[#3662E3]'>browse files</span>
                    </p>

                    <p className='text-[12px] text-[#4D5562] dark:text-[#F9FAFBCC]'>
                        JPG, PNG or GIF- Max file size 2MB
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MainPage;