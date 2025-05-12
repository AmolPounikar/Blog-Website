
import { useState } from "react";
import { useBlog } from "@/context/BlogContext";
import { useNavigate } from "react-router-dom";
import BlogCard from "@/components/BlogCard";
import DeleteConfirmation from "@/components/DeleteConfirmation";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Dashboard = () => {
  const { posts, deletePost } = useBlog();
  const navigate = useNavigate();
  const [deleteId, setDeleteId] = useState<string | null>(null);
  
  const handleEdit = (id: string) => {
    navigate(`/edit/${id}`);
  };
  
  const handleDelete = (id: string) => {
    setDeleteId(id);
  };
  
  const confirmDelete = () => {
    if (deleteId) {
      deletePost(deleteId);
      setDeleteId(null);
    }
  };

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold slide-up">Blog Dashboard</h1>
          <p className="text-muted-foreground mt-2 slide-up">Manage your blog posts</p>
        </div>
        <Button 
          onClick={() => navigate("/new")} 
          className="flex items-center gap-2 fade-in"
          style={{ animationDelay: "200ms" }}
        >
          <Plus size={16} />
          New Post
        </Button>
      </div>
      
      {posts.length === 0 ? (
        <div className="text-center py-12 fade-in" style={{ animationDelay: "300ms" }}>
          <h2 className="text-xl font-semibold">No blog posts yet</h2>
          <p className="text-muted-foreground mt-2">Create your first blog post to get started</p>
          <Button 
            onClick={() => navigate("/new")} 
            className="mt-4"
          >
            Create First Post
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <div 
              key={post.id}
              className="fade-in"
              style={{ animationDelay: `${300 + (index * 100)}ms` }}
            >
              <BlogCard 
                post={post} 
                isAdmin={true} 
                onEditClick={handleEdit} 
                onDeleteClick={handleDelete} 
              />
            </div>
          ))}
        </div>
      )}
      
      <DeleteConfirmation 
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default Dashboard;
