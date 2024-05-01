import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaCaretDown,
} from "react-icons/fa";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const [displaySideBar, setDisplaySidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const linkStyle = `  text-[.8rem] ${
    scrolled ? "text-primary" : "text-text"
  } sm:text-[.9rem] lg:text-[1rem] hover:text-orange-500 transition`;
  const links = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Pages",
      link: "/",
    },
    {
      id: 3,
      title: "Events",
      link: "/",
    },
    {
      id: 4,
      title: "Gallery",
      link: "/",
    },
    {
      id: 5,
      title: "Blog",
      link: "/",
    },
  ];

  // handles the height at which navbar should gain background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full">
      <nav
        className={`w-full z-40 mx-auto flex items-center justify-between py-3 px-3 md:px-8  fixed  ${
          scrolled ? "bg-text text-primary shadow-md" : "bg-transparent "
        } `}
      >
        <div className={`flex  gap-2 items-center justify-center`}>
          <img src="logo.jpeg" alt="" className="rounded-full size-10" />
          <h2
            className={`font-mono tracking-widest text-[1.2rem] ${
              scrolled ? "text-primary" : "text-text"
            } md:text-2xl`}
          >
            DM INN
          </h2>
        </div>
        {/* hamburger and close buttons */}
        <div
          className="sm:hidden"
          onClick={(e) => {
            e.preventDefault();
            setDisplaySidebar(!displaySideBar);
          }}
        >
          {displaySideBar ? (
            <FaTimes className="text-primary font-mono font-bold text-2xl" />
          ) : (
            <FaBars className="text-primary font-mono font-bold text-2xl" />
          )}
        </div>

        {/* Navigation links */}
        <ul className="hidden sm:flex items-center gap-6 md:gap-10 lg:gap-12  ">
          <li className={linkStyle}>
            <a href="/" className="text-white">
              Home
            </a>
          </li>
          <li className={`${linkStyle} relative flex items-center`}>
            <p
              href=""
              onClick={toggleDropdown}
              className="text-white flex items-center justify-center cursor-pointer"
            >
              Rooms
            </p>
            <FaCaretDown
              className="group cursor-pointer"
              onClick={toggleDropdown}
            />
            {showDropdown && (
              <div className="absolute w-[8vw] group-hover:block  top-full left-0 mt-1 bg-gray-800 text-text bg-background rounded">
                <a href="/" className="block px-4 py-2">
                  Room 1
                </a>
                <a href="/" className="block px-4 py-2">
                  Room 2
                </a>
                <a href="/" className="block px-4 py-2">
                  Room 3
                </a>
              </div>
            )}
          </li>
          <li className={linkStyle}>
            <a href="/" className="text-white">
              Services
            </a>
          </li>

          <li className={linkStyle}>
            <a href="/" className="text-white">
              Facilities
            </a>
          </li>

          <li className={linkStyle}>
            <a href="/" className="text-white">
              Contact
            </a>
          </li>

          <button
            type=""
            className="font-mono py-1 px-4 bg-primary text-text rounded-sm"
          >
            {" "}
            Book now
          </button>
        </ul>
      </nav>

      {/* SIDEBAR  FOR MOBILE VIEWPORT */}
      {displaySideBar && (
        <div className="fixed sm:hidden top-0 h-full w-1/2 flex-col flex gap-6 items-center  bg-[rgba(0,0,0,0.9)] left-0 py-4 px-2 z-40">
          {links.map((link) => (
            <li
              key={link.id}
              className="text-white list-none py-2 border-b w-[50%] text-center"
            >
              <a href={link.link} className="">
                {link.title}
              </a>
            </li>
          ))}
          <button
            type=""
            className="font-mono py-1 px-4 bg-orange-500 text-text"
          >
            {" "}
            Donate now
          </button>

          <img
            src="https://ideogram.ai/api/images/direct/FQT6NVfxQmysS12lCbhy2g.jpg"
            alt=""
            className="sixe-20 rounded-md "
          />

          <div className="flex gap-10">
            <a href="" className="text-text font-bold text-2xl">
              <FaFacebook />
            </a>
            <a href="" className="text-text font-bold text-2xl">
              <FaInstagram />
            </a>
            <a href="" className="text-text font-bold text-2xl">
              <FaTwitter />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
