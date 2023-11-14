import React from "react";
import { NavLink } from "react-router-dom";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {
  const footer1 = ["Shop", "Collections", "About"];
  const footer2 = ["Contact", "Product", "Account"];

  return (
    <>
      <footer className="bg-noise gap-5">

        {/* upper-portion */}
        <div  className="  p-5 flex flex-col justify-between gap-2 xl:flex-row xl:p-10">
          <div className="text-3xl text-cust-yellow font-logo m-5 hidden xl:block ">Vivienne's</div>

          <div className="flex justify-evenly p-4 xl:gap-10">
            <div className="">
              {footer1.map((link, index) => (
                <NavLink key={index} to={`/${link}`}>
                  <li className="list-none m-1 text-[#FFFFF0]">{link}</li>
                </NavLink>
              ))}
            </div>
            <div className="">
              {footer2.map((link, index) => (
                <NavLink key={index} to={`/${link}`}>
                  <li className="list-none m-1 text-[#FFFFF0] cursor-pointer">{link}</li>
                </NavLink>
              ))}
            </div>
          </div>

          <div className="">

            <div className="p-3">
              <p className="text-2xl font-logo text-cust-yellow ">Subscribe to our newsletter</p>
              <p className="text-[#FFFFF0]">For product announcements and exclusive insights. </p>
            </div>
            <div className="flex justify-between max-w-[25rem] border m-2 border-white rounded-full ">
              <MailOutlineIcon style={{ color: 'whitesmoke'  }} className="my-auto mx-3"/>
              <input type="text" placeholder="Input your email " className="bg-noise outline-none text-white" />
              <button className="bg-cust-yellow p-2 px-5 rounded-r-full">Subscribe</button>
            </div>
          </div>

        </div>

        {/* lower-portion  */}
        <div className="flex justify-between p-3 xl:px-20">
          <div className="text-white"> &copy; 2023 Farhan Inc. </div>
          <div className="flex gap-3 p-1">
            <img src="../../public/icons/twitterX.svg" alt="" className="w-5 cursor-pointer"/>
            <img src="../../public/icons/facebook.svg" alt="" className="w-5 cursor-pointer"/>
            <img src="../../public/icons/linkedin.svg" alt="" className="w-5 cursor-pointer"/>
            <img src="../../public/icons/youtube.svg" alt="" className="w-5 cursor-pointer"/>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
