import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'About Me' },
    { id: 3, text: 'Skills' },
    { id: 4, text: 'Contact' },
  ];

  return (
    <div className='bg-[#082f49] flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold'>Giorgio Pagani</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={25} /> : 
        <Menu>
          <MenuHandler>
            <Button><AiOutlineMenu size={25}/></Button>
          </MenuHandler>
          <MenuList>
            {navItems.map(item => (
              <MenuItem
                key={item.id}
              >
                {item.text}
              </MenuItem>
            ))}

          </MenuList>
        </Menu>
        }
      </div>
      
    </div>
  );
};

export default Navbar;
