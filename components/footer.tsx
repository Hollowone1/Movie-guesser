import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaSearch } from 'react-icons/fa';
import Image from 'next/image';

const MovieFooter = () => {
  return (
    <footer className="bg-default-violet text-white py-8 px-6 h-full">
      <div className="container mx-auto flex justify-between items-start">
        {/* Section des logos sociaux */}
        <div className="flex flex-col items-start space-y-4">
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com">
              <FaFacebook size={24} />
            </Link>
            <Link href="https://www.twitter.com">
              <FaTwitter size={24} />
            </Link>
            <Link href="https://www.instagram.com">
              <FaInstagram size={24} />
            </Link>
            <Link href="https://www.linkedin.com">
              <FaLinkedin size={24} />
            </Link>
            <Link href="https://www.youtube.com">
              <FaYoutube size={24} />
            </Link>
          </div>
          <div>
            <Image src="/assets/movie_guesser.png" alt="Logo" width={40} height={40} />
          </div>
        </div>

        {/* Section des liens */}
        <div className="flex flex-col items-end space-y-4">
          <div className="flex space-x-6">
            <Link href="/algorithme" className="hover:underline">
              L&apos;algorithme
            </Link>
            <Link href="/about" className="hover:underline">
              Qui sommes-nous?
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <Link href="/faq" className="hover:underline">
              FAQ
            </Link>
          </div>

          {/* Barre de recherche */}
          <div className="w-full">
            
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full px-4 py-2 rounded-lg bg-white text-black"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MovieFooter;
