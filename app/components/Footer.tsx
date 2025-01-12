"use client"

import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import '../styles/footer.css'

export const Footer = () => {
  return (
    <footer className=" footer ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Footer Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-bold mb-4">Σχετικά με εμάς</h3>
          <p className="text-sm">
          The Dry Nuts Helios company is based in Greece, Larissa city, and trades Greek dry nuts, dried fruits, and snacks since 1986. All products are chosen carefully and packed with responsibility to ensure their high quality and freshness. The purpose of our company is to please and satisfy our customers.          </p>
        </div>
        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-bold mb-4">Σύνδεσμοι</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#partners" className="hover:underline">
                Συνεργατες
              </a>
            </li>
            <li>
              <a href="#map" className="hover:underline">
                Βρείτε Τα προϊόντα μας
              </a>
            </li>
            <li>
              <a href="#aboutus" className="hover:underline">
                Η εταιρία
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Επικοινωνία
              </a>
            </li>
          </ul>
        </div>
        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-bold mb-4">Επικοινωνία</h3>
          <ul className="text-sm space-y-2">
            <li>Τηλέφωνο: <a className="mt-2 text-white"href='tel:+302410811450'>+30 2410811450</a></li>
            <li>Email: <a className="mt-2 text-white" href='mailto:info@heliosnuts.gr'>info@heliosnuts.gr</a></li>
            {/* <li>Διεύθυνση: Θεοχάρη 26, Λάρισα 413 35 </li> */}
          </ul>
          <div className="mt-4 flex space-x-5 social-media-section">
          {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 social-media-icon"
                aria-label="Facebook"
              >
                <FaFacebookF size={24} />
              </a> */}
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 social-media-icon"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a> */}
              <a
                href="https://www.linkedin.com/in/dry-nuts-helios-867ab3217/?originalSubdomain=gr"
                target="_blank"
                rel="noopener noreferrer"
                className=" social-media-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              {/* <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700  social-media-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={24} />
              </a> */}
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 pt-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Helios Nuts. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Designed by <a href="https://www.webc.gr" target="_blank" aria-label="Florian Chazizi">Webc.gr</a>
        </p>
      </div>
    </div>
  </footer>
  )
}