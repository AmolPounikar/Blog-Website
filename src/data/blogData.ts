
import { BlogPost } from "@/types/blog";

export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with React and TypeScript",
    excerpt: "Learn how to set up your first React project with TypeScript and understand the fundamentals.",
    content: "React is a popular JavaScript library for building user interfaces. TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Together, they provide a robust framework for building scalable web applications. In this tutorial, we'll walk through setting up a new React project with TypeScript, understand the basic concepts, and build a simple application.",
    author: "Jane Doe",
    createdAt: new Date("2025-03-15"),
    updatedAt: new Date("2025-03-15"),
    tags: ["React", "TypeScript", "Web Development"],
    imageUrl: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "2",
    title: "Mastering Tailwind CSS",
    excerpt: "Explore advanced techniques and best practices for building beautiful UIs with Tailwind CSS.",
    content: "Tailwind CSS has revolutionized the way developers approach CSS. By providing a utility-first framework, Tailwind makes it easy to build complex user interfaces without having to write custom CSS. In this blog post, we'll explore some advanced techniques and best practices for using Tailwind CSS effectively. We'll cover responsive design, dark mode, extracting components, and optimizing for production.",
    author: "John Smith",
    createdAt: new Date("2025-04-10"),
    updatedAt: new Date("2025-04-12"),
    tags: ["CSS", "Tailwind", "UI Design"],
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "3",
    title: "Building a REST API with Node.js",
    excerpt: "Step-by-step guide to creating a robust REST API using Node.js, Express, and MongoDB.",
    content: "RESTful APIs are the backbone of modern web applications, allowing clients to communicate with servers in a stateless manner. Node.js, with its event-driven architecture, is perfect for building scalable APIs. In this comprehensive guide, we'll walk through building a complete REST API using Node.js, Express, and MongoDB. We'll cover topics such as setting up routes, implementing middleware, handling authentication, and testing your API.",
    author: "Alex Johnson",
    createdAt: new Date("2025-05-05"),
    updatedAt: new Date("2025-05-07"),
    tags: ["Node.js", "API", "Backend"],
    imageUrl: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];
