
import { BlogPost } from "@/types/blog";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { formatRelative } from "date-fns";

interface BlogCardProps {
  post: BlogPost;
  isAdmin?: boolean;
  onDeleteClick?: (id: string) => void;
  onEditClick?: (id: string) => void;
}

const BlogCard = ({ post, isAdmin = false, onDeleteClick, onEditClick }: BlogCardProps) => {
  const formattedDate = formatRelative(new Date(post.createdAt), new Date());

  return (
    <Card className="hover-card h-full flex flex-col">
      {post.imageUrl && (
        <div className="w-full aspect-video overflow-hidden rounded-t-lg">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <CardHeader className="space-y-1">
        <Link to={`/post/${post.id}`}>
          <h3 className="text-xl font-bold hover:text-primary transition-colors">
            {post.title}
          </h3>
        </Link>
        <div className="flex items-center text-sm text-muted-foreground">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <span>{formattedDate}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap justify-between items-center pt-4 border-t border-border">
        <div className="flex flex-wrap gap-2 my-1">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        {isAdmin && (
          <div className="flex space-x-2">
            <button 
              onClick={() => onEditClick && onEditClick(post.id)}
              className="text-primary text-sm hover:underline"
            >
              Edit
            </button>
            <button 
              onClick={() => onDeleteClick && onDeleteClick(post.id)}
              className="text-destructive text-sm hover:underline"
            >
              Delete
            </button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
