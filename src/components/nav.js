import React from 'react';
import Dropdown from './dropdown';
import logo from '../../assets/logo.png';
import Image from 'next/image';
import { navdata } from './navbardata';

const Nav = () => {
  return (
    <div className='navbar flex fixed top-0 left-0 w-full bg-transparent z-10 pl-64'>
      <div className='logo text-white flex items-center justify-center content-center self-center'>
        <Image
          className='pic '
          src={logo}
          alt="Your Alt Text"
          width={100}
          height={200}
        />
      </div>

      <div className="container flex font-bold items-center justify-center content-center self-center">
        {navdata.map((set) => (
          <Dropdown menuName={set.name} options={set.options} />
        ))}
      </div>
    </div>
  );
};

export default Nav;
