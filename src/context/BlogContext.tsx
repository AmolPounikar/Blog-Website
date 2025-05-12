
import React, { createContext, useContext, useState } from 'react';
import { toast } from 'sonner';
import { BlogPost, BlogFormData } from '@/types/blog';
import { mockBlogPosts } from '@/data/blogData';

interface BlogContextType {
  posts: BlogPost[];
  loading: boolean;
  addPost: (post: BlogFormData) => void;
  updatePost: (id: string, post: BlogFormData) => void;
  deletePost: (id: string) => void;
  getPostById: (id: string) => BlogPost | undefined;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<BlogPost[]>(mockBlogPosts);
  const [loading, setLoading] = useState<boolean>(false);

  const addPost = (postData: BlogFormData) => {
    setLoading(true);
    
    // Simulate API latency
    setTimeout(() => {
      const newPost: BlogPost = {
        id: Date.now().toString(),
        ...postData,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      
      setPosts((prevPosts) => [newPost, ...prevPosts]);
      setLoading(false);
      toast.success('Blog post created successfully!');
    }, 500);
  };

  const updatePost = (id: string, postData: BlogFormData) => {
    setLoading(true);
    
    // Simulate API latency
    setTimeout(() => {
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === id
            ? {
                ...post,
                ...postData,
                updatedAt: new Date(),
              }
            : post
        )
      );
      
      setLoading(false);
      toast.success('Blog post updated successfully!');
    }, 500);
  };

  const deletePost = (id: string) => {
    setLoading(true);
    
    // Simulate API latency
    setTimeout(() => {
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      setLoading(false);
      toast.success('Blog post deleted successfully!');
    }, 500);
  };

  const getPostById = (id: string) => {
    return posts.find((post) => post.id === id);
  };

  return (
    <BlogContext.Provider
      value={{
        posts,
        loading,
        addPost,
        updatePost,
        deletePost,
        getPostById,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  
  return context;
};
