"use client"
import { usePathname } from "next/navigation";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
    const pathName = usePathname();
  return (
    <nav className="flex w-full items-center justify-between px-6 py-4 bg-gray-900 text-white mr-5 mt-5 rounded-lg">
      <h1 className="text-2xl font-bold">{pathName.split('/').pop().toLocaleUpperCase()}</h1>

      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-2 rounded-lg bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex items-center space-x-3 text-xl">
          <a href="https://github.com" target="_blank" className="hover:text-blue-400">
            <FaGithub />
          </a>
          <a href="https://twitter.com" target="_blank" className="hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-blue-400">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}
