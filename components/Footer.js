import Link from 'next/link';
import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="w-full flex justify-between p-5">
      {/* copyright */}
      <div>
        <span className="text-sm text-gray-400">© 2023 Result Predication</span>
      </div>
      {/* social handles */}
      <div className="flex justify-center items-center gap-5">
        <span className="text-sm text-gray-400">Follow us on</span>
        <div className="flex gap-3 justify-between">
          <Link
            href="https://www.facebook.com/"
            className="text-teal-700 hover:scale-150 ease-in duration-500"
          >
            <BsFacebook />
          </Link>
          <Link
            href="https://www.twitter.com/"
            className="text-teal-700 hover:scale-150 ease-in duration-500"
          >
            <BsTwitter />
          </Link>
          <Link
            href="https://www.instagram.com/"
            className="text-teal-700 hover:scale-150 ease-in duration-500"
          >
            <BsInstagram />
          </Link>
        </div>
      </div>
      {/* Author */}
      <div>
        <span className="text-sm text-gray-400">
          Made with KhunPasina by Team Kōdā
        </span>
      </div>
    </div>
  );
};

export default Footer;
