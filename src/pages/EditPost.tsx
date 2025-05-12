
import { useBlog } from "@/context/BlogContext";
import { useNavigate, useParams } from "react-router-dom";
import BlogForm from "@/components/BlogForm";
import { BlogFormData } from "@/types/blog";
import { useEffect } from "react";

const EditPost = () => {
  const { id } = useParams<{ id: string }>();
  const { getPostById, updatePost, loading } = useBlog();
  const navigate = useNavigate();
  
  const post = id ? getPostById(id) : undefined;

  useEffect(() => {
    if (!post) {
      navigate("/dashboard", { replace: true });
    }
  }, [post, navigate]);

  const handleSubmit = (data: BlogFormData) => {
    if (id) {
      updatePost(id, data);
      // Navigate after a brief delay to allow the toast to be visible
      setTimeout(() => navigate("/dashboard"), 500);
    }
  };

  if (!post) return null;

  return (
    <div className="container py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 slide-up">Edit Blog Post</h1>
      <BlogForm 
        initialData={post} 
        onSubmit={handleSubmit} 
        isSubmitting={loading} 
      />
    </div>
  );
};

export default EditPost;
