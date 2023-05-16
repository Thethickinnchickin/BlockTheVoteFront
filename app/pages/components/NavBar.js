import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-900 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
      <img width={100} height={100} src="./vote-nav.svg" />
        <a className="text-white pl-4 font-bold text-xl" href="/">
          Block The Vote
        </a>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
              Join
            
          </Link>
          <Link href="/claim" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
              NFT claim

          </Link>
          <Link href="/DAO" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400">
              DAO

          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

