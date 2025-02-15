import blacklogo from "../assets/images/blacklogo.webp";
import { FiPhoneCall } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  return (
    <>
      <div className="h-auto md:h-[350px] bg-[#e7f8ee] w-full flex flex-wrap md:flex-nowrap justify-center md:justify-between px-6 md:px-20 py-10 md:py-0">

        {/* Logo & Contact Section */}
        <div className="w-full md:w-1/4 text-center md:text-left mb-6 md:mb-0 mt-15">
          <img src={blacklogo} alt="" className="w-40 mx-auto md:mx-0" />
          <p className="text-2xl mt-2">Caribbean Ct</p>
          <p className="text-[#309255] mt-2">Haymarket, Virginia (VA).</p>

          <div className="flex justify-center md:justify-start items-center mt-4">
            <TfiEmail className="text-[#309255] h-6 w-6" />
            <span className="ml-2 text-[17px]">address@gmail.com</span>
          </div>

          <div className="flex justify-center md:justify-start items-center mt-2">
            <FiPhoneCall className="text-[#309255] h-6 w-6" />
            <span className="ml-2">(970) 262-1413</span>
          </div>

          <div className="flex justify-center md:justify-start gap-4 mt-6 text-2xl">
            <SlSocialFacebook />
            <BsTwitterX />
            <FaInstagram />
            <SlSocialLinkedin />
          </div>
        </div>

        {/* Category Section */}
        <div className="w-full md:w-1/4 text-center md:text-left mb-6 md:mb-0 mt-15">
          <h1 className="text-[25px] font-medium">Category</h1>
          <p className="mt-4 text-[16px]">Creative Writing</p>
          <p className="mt-2 text-[16px]">Film & Video</p>
          <p className="mt-2 text-[16px]">Graphic Design</p>
          <p className="mt-2 text-[16px]">UI/UX Design</p>
          <p className="mt-2 text-[16px]">Business Analytics</p>
          <p className="mt-2 text-[16px]">Marketing</p>
        </div>

        {/* Quick Links Section */}
        <div className="w-full md:w-1/4 text-center md:text-left mb-6 md:mb-0 mt-15">
          <h1 className="text-[25px] font-medium">Quick Links</h1>
          <p className="mt-4 text-[16px]">Privacy Policy</p>
          <p className="mt-2 text-[16px]">Discussion</p>
          <p className="mt-2 text-[16px]">Terms & Conditions</p>
          <p className="mt-2 text-[16px]">Customer Support</p>
          <p className="mt-2 text-[16px]">Course FAQ’s</p>
        </div>

        {/* Subscription Box */}
        <div className="w-full md:w-1/4 text-center mt-15">
          <h1 className="text-[25px] font-medium">Subscribe</h1>
          <p className="mt-6 text-[16px]">
            Lorem Ipsum has been them an industry printer took a galley make book.
          </p>

          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full h-12 mt-4 p-2 border border-gray-300 rounded-lg focus:outline-none bg-white"
          />

          <button className="w-full h-12 mt-4 bg-[#309255] text-white p-2 rounded-lg hover:bg-green-700">
            Subscribe
          </button>
        </div>
      </div>
      <div className="w-full h-15 bg-black flex flex-wrap justify-center md:justify-between items-center px-5 md:px-20 py-4">
  
  {/* Links Section */}
  <div className="flex flex-wrap justify-center md:justify-start gap-5">
    <p className="text-white hover:text-[#309255] cursor-pointer">Terms of Service</p> 
    <p className="text-white hover:text-[#309255] cursor-pointer">Privacy Policy</p>
    <p className="text-white hover:text-[#309255] cursor-pointer">Sitemap</p>
    <p className="text-white hover:text-[#309255] cursor-pointer">Security</p>
  </div>

  {/* Copyright Section */}
  <div className="text-center md:text-right mt-2 md:mt-0">
    <p className="text-white">
      © 2025 <span className="text-[#309255]">Edule</span> Made with by 
      <span className="text-[#309255]"> Codecarnival</span>
    </p>
  </div>

</div>
    </>
  );
};

export default Footer;
