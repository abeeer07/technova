import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: { default: "TECHNOVA — Technology That Moves Tomorrow", template: "%s | TECHNOVA" },
  description: "Clear, useful stories about technology, artificial intelligence, software and digital life.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://technova.vercel.app"),
  openGraph: { title: "TECHNOVA", description: "Technology that moves tomorrow.", type: "website" }
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="en"><body>
  <div className="topbar"><div className="wrap"><span>YOUR DAILY DOSE OF TECHNOLOGY</span><span>Ideas • Innovation • Inspiration</span></div></div>
  <header className="header"><nav className="wrap nav">
   <Link className="logo" href="/">TECHNO<span>VA</span></Link>
   <div className="navlinks"><Link href="/">Home</Link><Link href="/category/AI">AI</Link><Link href="/category/Software">Software</Link><Link href="/category/Gadgets">Gadgets</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div>
   <Link className="btn" href="/search">Explore</Link>
  </nav></header>
  {children}<Footer/>
 </body></html>
}