import React, { useEffect, useState } from 'react';
import logo from "../assets/logo.svg";
import moonLogo from "../assets/Moon_fill.svg";
import sunLogo from "../assets/Sun_fill.svg";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        }
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);

        if (newDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <div className='bg-[#F9FAFBCC] dark:bg-[#121826] h-[13vh] flex items-center border-b border-[#E5E7EB] dark:border-gray-700'>
            <div className='w-[90%] mx-auto flex justify-between items-center'>
                <img className='w-[180px]' src={logo} alt="Logo" />

                <div
                    onClick={toggleDarkMode}
                    className='p-2 border border-[#E5E7EB] dark:border-gray-700 cursor-pointer hover:border-[#4D5562] dark:hover:border-gray-500 rounded-xl'
                >
                    <img src={darkMode ? sunLogo : moonLogo} alt={darkMode ? "Sun Logo" : "Moon Logo"} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
