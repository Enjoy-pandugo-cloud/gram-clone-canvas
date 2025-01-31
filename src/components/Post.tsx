import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";

interface PostProps {
  username: string;
  userImage: string;
  image: string;
  caption: string;
  likes: number;
}

export const Post = ({ username, userImage, image, caption, likes }: PostProps) => {
  return (
    <div className="bg-white border border-instagram-border rounded-lg mb-4">
      <div className="flex items-center p-3">
        <img src={userImage} alt={username} className="w-8 h-8 rounded-full object-cover" />
        <span className="ml-3 font-semibold">{username}</span>
      </div>
      
      <img src={image} alt="post" className="w-full object-cover" />
      
      <div className="p-3">
        <div className="flex justify-between mb-2">
          <div className="flex space-x-4">
            <Heart className="w-6 h-6 cursor-pointer hover:text-instagram-red transition-colors" />
            <MessageCircle className="w-6 h-6 cursor-pointer hover:text-instagram-gray transition-colors" />
            <Send className="w-6 h-6 cursor-pointer hover:text-instagram-gray transition-colors" />
          </div>
          <Bookmark className="w-6 h-6 cursor-pointer hover:text-instagram-gray transition-colors" />
        </div>
        
        <div className="font-semibold mb-2">{likes.toLocaleString()} likes</div>
        
        <div>
          <span className="font-semibold mr-2">{username}</span>
          {caption}
        </div>
      </div>
    </div>
  );
};