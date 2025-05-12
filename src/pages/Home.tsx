
import { useEffect, useState } from "react";
import { useBlog } from "@/context/BlogContext";
import BlogCard from "@/components/BlogCard";

const Home = () => {
  const { posts } = useBlog();
  const [animatedPosts, setAnimatedPosts] = useState<string[]>([]);

  useEffect(() => {
    // Stagger animation for blog cards
    const timer = posts.map((post, index) => {
      return setTimeout(() => {
        setAnimatedPosts(prev => [...prev, post.id]);
      }, 100 * index);
    });

    return () => timer.forEach(t => clearTimeout(t));
  }, [posts]);

  return (
    <div className="container py-6 md:py-10">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight slide-up">Blog Platform</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto slide-up">
          Explore our collection of insightful blog posts on various topics.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className={`transform transition-all duration-500 ${
              animatedPosts.includes(post.id) 
                ? "translate-y-0 opacity-100" 
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <BlogCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
