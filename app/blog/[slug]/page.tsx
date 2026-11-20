import {notFound} from "next/navigation";
import {supabase} from "@/lib/supabase";
import type {Post} from "@/lib/types";
import type {Metadata} from "next";
export const revalidate=60;
async function getPost(slug:string){const {data}=await supabase.from("posts").select("*").eq("slug",slug).eq("published",true).maybeSingle();return data as Post|null}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=await getPost(slug);return p?{title:p.title,description:p.excerpt,openGraph:{title:p.title,description:p.excerpt,images:p.cover_image?[p.cover_image]:[]}}:{}}
export default async function Article({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=await getPost(slug);if(!p)notFound();return <main className="wrap"><article className="article"><span className="tag">{p.category}</span><h1>{p.title}</h1><p className="lead">{p.excerpt}</p><div className="meta">By TECHNOVA Editorial · {new Date(p.created_at).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}</div>{p.cover_image&&<img className="article-image" src={p.cover_image} alt={p.title}/>}<div className="article-content">{p.content}</div><p className="muted" style={{marginTop:40}}>Thanks for reading TECHNOVA. Explore more stories on our homepage.</p></article></main>}