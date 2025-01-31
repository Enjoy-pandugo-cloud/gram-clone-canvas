import { Search, Heart, MessageCircle, PlusSquare, Compass, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("Search functionality coming soon!");
  };

  const handleNotifications = () => {
    setShowNotifications(!showNotifications);
    toast.info("Notifications coming soon!");
  };

  const handleNewPost = () => {
    toast.info("Create post functionality coming soon!");
  };

  const handleMessages = () => {
    toast.info("Messages functionality coming soon!");
  };

  const handleExplore = () => {
    toast.info("Explore functionality coming soon!");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-instagram-border z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2">
        <Link to="/" className="text-xl font-semibold">Instagram</Link>
        
        <form onSubmit={handleSearch} className="hidden md:flex items-center bg-instagram-bg rounded-lg px-4 py-2">
          <Search className="w-4 h-4 text-instagram-gray" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none focus:outline-none ml-2 w-64"
          />
        </form>
        
        <div className="flex items-center space-x-4">
          <Link to="/">
            <Home className="w-6 h-6 cursor-pointer hover:scale-105 transition-transform" />
          </Link>
          <PlusSquare 
            onClick={handleNewPost}
            className="w-6 h-6 cursor-pointer hover:scale-105 transition-transform" 
          />
          <Heart 
            onClick={handleNotifications}
            className="w-6 h-6 cursor-pointer hover:scale-105 transition-transform" 
          />
          <MessageCircle 
            onClick={handleMessages}
            className="w-6 h-6 cursor-pointer hover:scale-105 transition-transform" 
          />
          <Compass 
            onClick={handleExplore}
            className="w-6 h-6 cursor-pointer hover:scale-105 transition-transform" 
          />
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