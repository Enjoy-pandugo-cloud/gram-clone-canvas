import { Search, Heart, MessageCircle, PlusSquare, Compass } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-instagram-border z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2">
        <Link to="/" className="text-xl font-semibold">Instagram</Link>
        
        <div className="hidden md:flex items-center bg-instagram-bg rounded-lg px-4 py-2">
          <Search className="w-4 h-4 text-instagram-gray" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none focus:outline-none ml-2 w-64"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <PlusSquare className="w-6 h-6 cursor-pointer hover:scale-105 transition-transform" />
          <Heart className="w-6 h-6 cursor-pointer hover:scale-105 transition-transform" />
          <MessageCircle className="w-6 h-6 cursor-pointer hover:scale-105 transition-transform" />
          <Compass className="w-6 h-6 cursor-pointer hover:scale-105 transition-transform" />
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            alt="profile"
            className="w-6 h-6 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};