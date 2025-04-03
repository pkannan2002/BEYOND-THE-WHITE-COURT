
import { Search, Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";

interface HeaderProps {
  setIsSidebarOpen: (isOpen: boolean) => void;
  isSidebarOpen: boolean;
}

export default function Header({ setIsSidebarOpen, isSidebarOpen }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <button
            className="p-2 -ml-2 text-gray-600 hover:text-gray-900"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="text-xl font-semibold text-blue-600">BLOG</h1>
          {/* <div className="hidden md:block text-sm text-gray-500">Doctors' Secret Struggles</div> */}
        </div>

        <div className="flex items-center space-x-6">
      

<nav className="hidden md:flex space-x-6">
  <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
  <Link to="/about" className="text-gray-600 hover:text-gray-900">About Us</Link>
  <Link to="/stories" className="text-gray-600 hover:text-gray-900">Stories</Link>
</nav>


          <div className="relative">
            <input
              type="text"
              placeholder="Search doctors..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
      </div>
    </header>
  );
}
