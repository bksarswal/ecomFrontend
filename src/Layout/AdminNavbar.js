import { useState } from 'react';
import clsx from 'clsx';

import { useDispatch } from 'react-redux'; // For dispatching actions (if using Redux)
import { IoMdMenu } from 'react-icons/io';
import logo from '../Images/sosn/lg.webp';
import insta from "../Images/sosn/insta2.png"
import fb from "../Images/sosn/fb.jpg";
import youtub from "../Images/sosn/youtub.png"
import Adminhome from '../Screen/AdminPages/AdminHome';
import { Link } from 'react-router';
import "../Style/index.css"

function AdminNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Track login status
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch(); // Initialize Redux dispatch (optional)

  const handleMenu = () => {
    setIsActive((prevState) => !prevState);
  };

  const handleLogout = () => {
    if (isLoggedIn) {
      // Dispatch logout action or clear user data
      dispatch({ type: 'Logout' }); // Replace 'LOGOUT' with your action type
      setIsLoggedIn(false); // Update local state
    } else {
      // Navigate to login page
      window.location.href = '/Login'; // Alternatively, use `navigate` if using react-router
    }
  };

  const Name = [
    { name: 'Adminhome', link: '/Adminhome' },
    { name: 'Adprodect', link: '/Adprodect' },
    
    
    {
      name: isLoggedIn ? 'Logout' : 'Login',
      action: handleLogout, // Attach logout/login handler here
    },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-10 p-2 flex bg-white justify-between items-center shadow-md">
        <a href="#" id="brand" className="flex gap-2 items-center">
          <img className="object-cover max-w-20 max-h-16 ml-4" src={logo} alt="logo" />
          <span className="text-lg font-medium">Saini Online Stone industries</span>
        </a>

        {/* Desktop Menu */}
        <div id="nav-menu" className={clsx('hidden lg:flex gap-12')}>
          {Name.map((d, i) =>
            d.action ? (
              <button
                key={i}
                onClick={d.action}
                className="font-medium hover:bg-gray-500 p-2 rounded-md block"
              >
                {d.name}
              </button>
            ) : (
              <a
                key={i}
                href={d.link}
                className="font-medium hover:bg-gray-500 p-2 rounded-md block"
              >
                {d.name}
              </a>
            )
          )}
        </div>

        <button className="hidden lg:flex items-center border-2 px-2 py-2 gap-2 rounded-md border-black">
       
          <Link className=' hover:bg-gray-500 p-2'to="https://www.instagram.com/ms954923?igsh=dHd5ZzdncXFrNXNu"> <img src={insta} className="max-w-6 max-h-6" alt="instagram" /></Link>
          <Link to="#" className=' hover:bg-gray-500 p-2'><img src={youtub} className="max-w-6 max-h-6" alt="youtub" /></Link>
           <Link to="#" className=' hover:bg-gray-500 p-2 '><img src={fb} className="max-w-6 max-h-6" alt="facebook" /></Link>

      <Link to={Adminhome} className=' hover:bg-gray-500 p-2 '> </Link>
          </button>
       

        {/* Mobile Menu Button */}
        <button type="button" className="p-2 lg:hidden" onClick={handleMenu}>
          <IoMdMenu />
        </button>

        {/* Mobile Menu */}
        <div
          id="nav-dialog"
          className={clsx('fixed z-10 lg:hidden inset-0 bg-white', {
            block: isActive,
            hidden: !isActive,
          })}
        >
          <div id="navbar" className="flex justify-between p-4">
            <a href="#" id="brand" className="flex gap-2 items-center">
              <img className="object-cover max-w-12 max-h-8 ml-4" src={logo} alt="bk" />
              <span className="text-xxg font-medium">Saini Online Stone industries</span>
            </a>
            <button type="button" className="p-2" onClick={handleMenu}>
              <i className="fa-solid fa-xmark text-gray-800"></i>
            </button>
          </div>

          <div className="mt-6">
            {Name.map((d, i) =>
              d.action ? (
                <button
                  key={i}
                  onClick={d.action}
                  className="font-medium p-2 m-3 hover:bg-gray-500 block rounded-lg"
                >
                  {d.name}
                </button>
              ) : (
                <a
                  key={i}
                  href={d.link}
                  className="font-medium p-2 m-3 hover:bg-gray-500 block rounded-lg"
                >
                  {d.name}
                </a>
              )
            )}
          </div>

          <div className="h-[1px] "></div>
          <button className="mt-6 w-full flex items-center  px-8 py-6 gap-2">
          <Link className=' hover:bg-gray-500 p-2'to="https://www.instagram.com/ms954923?igsh=dHd5ZzdncXFrNXNu"> <img src={insta} className="max-w-6 max-h-6" alt="instagram" /></Link>
          <Link to="#" className=' hover:bg-gray-500 p-2'><img src={youtub} className="max-w-6 max-h-6" alt="youtub" /></Link>
           <Link to="#" className=' hover:bg-gray-500 p-2 '><img src={fb} className="max-w-6 max-h-6" alt="facebook" /></Link>

      <Link to={Adminhome} className=' hover:bg-gray-500 p-2 '>  back</Link>
          </button>
        </div>
      </nav>
    </>
  );
}

export default AdminNavbar;
