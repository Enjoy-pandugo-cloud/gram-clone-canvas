import { Navbar } from "@/components/Navbar";
import { Stories } from "@/components/Stories";
import { Post } from "@/components/Post";

const posts = [
  {
    id: 1,
    username: "photography_lover",
    userImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    caption: "Working from my favorite spot! 💻✨ #coding #developer",
    likes: 1234,
  },
  {
    id: 2,
    username: "tech_enthusiast",
    userImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    caption: "Setup of the day 🖥️ #workspace #productivity",
    likes: 2345,
  },
  {
    id: 3,
    username: "travel_adventures",
    userImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    caption: "Paradise found 🌴 #travel #wanderlust",
    likes: 3456,
  },
];

const Index = () => {
  return (
    <div className="bg-instagram-bg min-h-screen">
      <Navbar />
      <div className="max-w-xl mx-auto pt-16 px-4">
        <div className="my-8">
          <Stories />
        </div>
        <div className="space-y-4">
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;