
import { useBlog } from "@/context/BlogContext";
import { useNavigate } from "react-router-dom";
import BlogForm from "@/components/BlogForm";
import { BlogFormData } from "@/types/blog";

const CreatePost = () => {
  const { addPost, loading } = useBlog();
  const navigate = useNavigate();

  const handleSubmit = (data: BlogFormData) => {
    addPost(data);
    // Navigate after a brief delay to allow the toast to be visible
    setTimeout(() => navigate("/dashboard"), 500);
  };

  return (
    <div className="container py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 slide-up">Create New Blog Post</h1>
      <BlogForm onSubmit={handleSubmit} isSubmitting={loading} />
    </div>
  );
};

export default CreatePost;
