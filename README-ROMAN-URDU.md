# TECHNOVA — Setup Guide (Roman Urdu)

Aap ki TECHNOVA blogging website ka source code is folder mein hai. Website Next.js par bani hai aur posts Supabase database mein save hoti hain.

## 1) Zaroori accounts
1. GitHub par free account banayein.
2. Supabase.com par free project banayein.
3. Vercel.com par free account banayein.
4. GitHub par is project ka code upload karein, phir Vercel mein Import Project karein.

## 2) Database setup
Supabase project khol kar SQL Editor > New query mein `supabase/schema.sql` ka poora code paste karke Run karein.

## 3) Admin user
Supabase > Authentication > Users > Add user mein apna email aur strong password daal kar user banayein. Email confirm kar dein. Phir deployed website par `/admin` khol kar isi email/password se login karein.
RLS policies har authenticated user ko sirf apne author_id wali posts manage karne deti hain. Isliye apne admin login ko private rakhein. Public users sirf published posts dekh sakte hain.

## 4) Environment variables
Vercel > Project > Settings > Environment Variables mein ye values add karein:
- `NEXT_PUBLIC_SUPABASE_URL` = Supabase Project Settings > API se Project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` = Supabase Project Settings > API se anon/public key
- `NEXT_PUBLIC_SITE_URL` = aap ki deployed website ka exact URL, misal `https://technova.vercel.app`

Phir Vercel par Redeploy karein. Local computer par chalane ke liye `.env.example` ko `.env.local` naam se copy karke values fill karein, phir terminal mein `npm install` aur `npm run dev` chalayein.

## 5) Content publish karna
`https://YOUR-DOMAIN/admin` par login karein. Title, slug, excerpt, category, image URL aur original article likhein. "Publish immediately" tick karke Save Article karein. Draft ke liye tick na karein.

## 6) AdSense se pehle zaroori kaam
- Placeholder email `hello@technova.example` ko apne real email se replace karein.
- About, Contact, Privacy Policy, Terms aur Disclaimer ko apni real website practices ke mutabiq review karein.
- Kam az kam 15–20 high-quality, original, useful articles likhna ek practical starting target hai; Google approval ki guarantee nahi.
- Har article mein apni research, clear headings, useful examples aur sources dein. Copy-paste ya AI se bina fact-check kiye mass content publish na karein.
- Site ko mobile par test karein, broken links fix karein, aur Search Console mein sitemap submit karein.
- AdSense approval automatic nahi hoti. Google ki current publisher policies aur eligibility rules follow karna zaroori hai.

## 7) Important notes
- Free Vercel address aam tor par `*.vercel.app` hota hai; custom `.com` domain aam tor par paid hota hai.
- Supabase/Vercel free plans ki limits aur policies badal sakti hain.
- Ye production-oriented starter hai, lekin live karne se pehle apni branding, contact details, content, database aur security settings test karein.
- Admin route public link se accessible hai, magar content changes ke liye Supabase login aur database RLS required hain. Admin credentials kisi ke saath share na karein.
