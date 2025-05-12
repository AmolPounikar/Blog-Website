
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  imageUrl?: string;
}

export interface BlogFormData {
  title: string;
  content: string;
  excerpt: string;
  author: string;
  tags: string[];
  imageUrl?: string;
}
