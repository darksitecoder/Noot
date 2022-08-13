import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search';
import Noot from './noot.png';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export const Navbar = ({ darkTheme, setDarkTheme}) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">


        <div className="flex justify-between items-center space-x-9 w-screen">

            <Link to="/">
              <p className="text-3xl font-bold tetx-white py-1 px-2 rounded  dark:text-white flex">
                <img src={Noot} alt=""
                className="w-[80px]" /> Noot 
              </p>
              <hr className="hidden dark:block w-35 ml-5" style={{boxShadow: "5px -20px 40px 5px white"}}/>
            </Link>
            <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:text-white bg-transparent rounded-full p-0 hover:shadow-lg hover:shadow-gray-400">
                {darkTheme ? <WbSunnyIcon fontSize="large"/> : <Brightness3Icon fontSize="large"/>}
            </button>
    </div>
    <Search />
    </div>
  );
}
