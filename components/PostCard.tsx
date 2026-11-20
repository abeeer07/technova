import Link from "next/link";
import type {Post} from "@/lib/types";
export default function PostCard({post}:{post:Post}) {
 return <article className="postcard">
  <Link href={`/blog/${post.slug}`}>
   {post.cover_image ? <img className="cover" src={post.cover_image} alt={post.title}/> : <div className="cover-placeholder">TECHNOVA</div>}
  </Link>
  <div className="postbody"><span className="tag">{post.category}</span>
   <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
   <p>{post.excerpt}</p><div className="meta">{new Date(post.created_at).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})} · 5 min read</div>
  </div>
 </article>
}