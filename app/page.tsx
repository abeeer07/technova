import Link from "next/link";
import PostCard from "@/components/PostCard";
import {supabase} from "@/lib/supabase";
import type {Post} from "@/lib/types";
export const revalidate = 60;
export default async function Home(){
 let posts:Post[]=[];
 try { const {data}=await supabase.from("posts").select("*").eq("published",true).order("created_at",{ascending:false}).limit(9); posts=(data||[]) as Post[]; } catch {}
 return <>
  <section className="hero"><div className="wrap"><div className="eyebrow">THE FUTURE, EXPLAINED</div><h1>Technology that moves tomorrow.</h1><p>Discover the ideas, tools and innovations shaping our digital world. Straightforward stories on AI, software, gadgets and what comes next.</p><div className="hero-actions"><Link className="btn light" href="/search">Explore articles</Link><Link className="btn outline" href="/about">Discover TECHNOVA</Link></div></div></section>
  <main className="wrap">
   <section className="section"><div className="section-head"><div><div className="eyebrow">FRESH PERSPECTIVES</div><h2>Latest stories</h2></div><Link className="textlink" href="/search">View all →</Link></div>
    {posts.length ? <div className="grid">{posts.map(p=><PostCard key={p.id} post={p}/>)}</div> : <div className="empty"><h3>Our first stories are on the way.</h3><p>Check back soon for practical technology guides, explainers and fresh ideas.</p></div>}
   </section>
   <section className="section"><div className="newsletter"><div><h2>Stay curious. Stay ahead.</h2><p className="muted">Explore practical insights from the ever-changing world of technology.</p></div><Link className="btn" href="/category/AI">Explore AI stories</Link></div></section>
  </main>
 </>
}