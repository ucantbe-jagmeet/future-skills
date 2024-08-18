import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between lg:space-x-36 px-10">
        {/* Left Section */}
        <div className="mb-6 md:mb-0 mr-10">
          <h3 className="text-lg font-semibold">Abstract</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Branches
              </a>
            </li>
          </ul>
        </div>

        {/* Center Section */}
        <div className="mb-6 md:mb-0 ">
          <h3 className="text-lg font-semibold">Resources</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Release Notes
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Status
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">Community</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Dribbble
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Podcast
              </a>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Legal
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-10 w-40 pt-4 text-center text-sm self-end  ">
          <p>&copy; Copyright 2024 Abstract Studio Design, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
