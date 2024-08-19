'use-client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';


const MovieHeader = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
              <Image src="/assets/movie_guesser.png" alt="Logo" width={80} height={80} />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-4">
          <Link href="/algorithme" className="px-8 py-2 border border-gray-300 border-t-0 rounded-xl hover:bg-gray-100 transition duration-200 bg-default-pink w-48 text-white text-center">
              Algorithme
          </Link>
          <Link href="/playlists" className="px-8 py-2 border border-gray-300 border-t-0 rounded-xl hover:bg-gray-100 transition duration-200 bg-default-yellow w-48 text-white text-center">
              Playlists
          </Link>
          <Link href="/critiques" className="px-8 py-2 border border-gray-300 border-t-0 rounded-xl hover:bg-gray-100 transition duration-200 bg-default-grey w-48 text-white text-center">
              Les Critiques
          </Link>
        </nav>

        {/* Profile Icon */}
        <div className="flex items-center">
          <FaUserCircle size={30} className="text-gray-600" />
        </div>
      </div>

      {/* Page Titles */}
      <div className="text-center mt-6">
        <h1 className="text-9xl font-rum-raisin">Movie-Guesser</h1>
        <h2 className="text-5xl font-rum-raisin">Un film c&apos;est bien, un bon film c&apos;est mieux!</h2>
      </div>
    </header>
  );
};

export default MovieHeader;
