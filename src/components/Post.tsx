import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface PostProps {
  username: string;
  userImage: string;
  image: string;
  caption: string;
  likes: number;
}

export const Post = ({ username, userImage, image, caption, likes: initialLikes }: PostProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleComment = () => {
    toast.info("Comment functionality coming soon!");
  };

  const handleShare = () => {
    toast.info("Share functionality coming soon!");
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    toast.success(isSaved ? "Post removed from saved" : "Post saved successfully!");
  };

  return (
    <div className="bg-white border border-instagram-border rounded-lg mb-4">
      <div className="flex items-center p-3">
        <img src={userImage} alt={username} className="w-8 h-8 rounded-full object-cover" />
        <span className="ml-3 font-semibold cursor-pointer hover:underline">{username}</span>
      </div>
      
      <div className="relative">
        <img 
          src={image} 
          alt="post" 
          className="w-full object-cover"
          onDoubleClick={handleLike}
        />
      </div>
      
      <div className="p-3">
        <div className="flex justify-between mb-2">
          <div className="flex space-x-4">
            <Heart 
              className={`w-6 h-6 cursor-pointer transition-colors ${isLiked ? 'fill-instagram-red text-instagram-red' : 'hover:text-instagram-gray'}`}
              onClick={handleLike}
            />
            <MessageCircle 
              className="w-6 h-6 cursor-pointer hover:text-instagram-gray transition-colors"
              onClick={handleComment}
            />
            <Send 
              className="w-6 h-6 cursor-pointer hover:text-instagram-gray transition-colors"
              onClick={handleShare}
            />
          </div>
          <Bookmark 
            className={`w-6 h-6 cursor-pointer transition-colors ${isSaved ? 'fill-black' : 'hover:text-instagram-gray'}`}
            onClick={handleSave}
          />
        </div>
        
        <div className="font-semibold mb-2">{likes.toLocaleString()} likes</div>
        
        <div>
          <span className="font-semibold mr-2 cursor-pointer hover:underline">{username}</span>
          {caption}
        </div>

        <button 
          className="text-instagram-gray text-sm mt-2"
          onClick={handleComment}
        >
          View all comments
        </button>
      </div>
    </div>
  );
};