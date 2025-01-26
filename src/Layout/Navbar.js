import { useState } from 'react';
import clsx from 'clsx';
import { IoMdMenu } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';
import logo from '../Images/sosn/lg.webp';
import insta from "../Images/sosn/insta2.png";
import fb from "../Images/sosn/fb.jpg";
import youtub from "../Images/sosn/youtub.png";
import { Link } from 'react-router';
import Home from '../Screen/home';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenu = () => setIsActive((prevState) => !prevState);
  const toggleSidebar = () => setIsSidebarOpen((prevState) => !prevState);
  const handleLogout = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      window.location.href = '/Login';
    }
  };

  const Name = [
    { name: 'Home', link: '/home' },
    { name: 'About', link: '/About' },
    { name: 'Contact', link: '/Contact' },
    { name:'Signup',link:'/Ragister'},
    {
      name: isLoggedIn ? 'Logout' : 'Login',
      action: handleLogout,
    },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-10 p-2 flex bg-white justify-between items-center shadow-md">
        <a href="#" id="brand" className="flex gap-2 items-center">
          <img className="object-cover max-w-20 max-h-16 ml-4" src={logo} alt="logo" />
          <span className="text-lg font-medium">Saini Online Stone Industries</span>
        </a>

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

        <div className="flex items-center gap-4">
          <div
            onClick={toggleSidebar}
            className="p-2  md:hidden   flex items-center gap-2"
          >
            <IoMdMenu className="text-xl" />
            
          </div>

          <button className="hidden lg:flex items-center px-2 py-2 gap-2 rounded-md border-black">
            <Link className="hover:bg-gray-500 p-2" to="https://www.instagram.com/ms954923?igsh=dHd5ZzdncXFrNXNu">
              <img src={insta} className="max-w-6 max-h-6" alt="instagram" />
            </Link>
            <Link to="#" className="hover:bg-gray-500 p-2">
              <img src={youtub} className="max-w-6 max-h-6" alt="youtube" />
            </Link>
            <Link to="#" className="hover:bg-gray-500 p-2">
              <img src={fb} className="max-w-6 max-h-6" alt="facebook" />
            </Link>
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={clsx(
          'fixed inset-y-0 md:hidden left-0 z-10 w-64 bg-gray-100 shadow-lg transform transition-transform',
          {
            '-translate-x-full': !isSidebarOpen,
            'translate-x-0': isSidebarOpen,
          }
        )}
      >
        <div className="flex justify-between p-4 border-b">
          
          <button onClick={toggleSidebar}>
            <IoMdClose className="text-xl" />
          </button>
        </div>
        <ul className="p-4">
          {Name.map((d, i) => (
            <li key={i} className="mb-2">
              {d.action ? (
                <button onClick={d.action} className="text-left w-full hover:bg-gray-300 p-2 rounded">
                  {d.name}
                </button>
              ) : (
                <a href={d.link} className="block hover:bg-gray-300 p-2 rounded">
                  {d.name}
                </a>
              )}
            </li>
          ))}
        </ul>

      
      </div>
    </>
  );
}

export default Navbar;
