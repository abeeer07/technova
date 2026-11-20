export type Post = {
  id: string; title: string; slug: string; excerpt: string; content: string;
  category: string; cover_image: string | null; published: boolean;
  created_at: string; author_id?: string;
};