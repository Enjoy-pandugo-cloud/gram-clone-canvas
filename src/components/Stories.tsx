const stories = [
  { id: 1, username: "user1", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7" },
  { id: 2, username: "user2", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
  { id: 3, username: "user3", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" },
  { id: 4, username: "user4", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c" },
];

export const Stories = () => {
  return (
    <div className="flex space-x-4 p-4 bg-white border border-instagram-border rounded-lg overflow-x-auto">
      {stories.map((story) => (
        <div key={story.id} className="flex flex-col items-center space-y-1">
          <div className="relative cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-pink-500 rounded-full p-[2px] animate-story-ring">
              <div className="bg-white p-[2px] rounded-full">
                <img
                  src={story.image}
                  alt={story.username}
                  className="w-14 h-14 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
          <span className="text-xs">{story.username}</span>
        </div>
      ))}
    </div>
  );
};