
import { useBlog } from "@/context/BlogContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatRelative } from "date-fns";
import { ArrowLeft } from "lucide-react";

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { getPostById } = useBlog();
  const navigate = useNavigate();
  
  const post = id ? getPostById(id) : undefined;

  useEffect(() => {
    if (!post) {
      navigate("/", { replace: true });
    }
  }, [post, navigate]);

  if (!post) return null;

  const formattedDate = formatRelative(new Date(post.createdAt), new Date());

  return (
    <article className="container py-8 max-w-4xl">
      <Button 
        variant="ghost" 
        onClick={() => navigate(-1)} 
        className="mb-6 flex items-center gap-2 fade-in"
      >
        <ArrowLeft size={16} />
        Back
      </Button>
      
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">{post.title}</h1>
        <div className="flex flex-wrap items-center text-muted-foreground mb-4 slide-up">
          <span>By {post.author}</span>
          <span className="mx-2">•</span>
          <span>{formattedDate}</span>
        </div>
        <div className="flex flex-wrap gap-2 slide-up">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </header>
      
      {post.imageUrl && (
        <div className="mb-8 overflow-hidden rounded-lg fade-in">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-auto object-cover"
          />
        </div>
      )}
      
      <div className="prose prose-lg dark:prose-invert max-w-none fade-in">
        {post.content.split("\n").map((paragraph, index) => (
          <p key={index} className="my-4 text-foreground">{paragraph}</p>
        ))}
      </div>
    </article>
  );
};

export default PostDetail;
