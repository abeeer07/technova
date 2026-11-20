-- Run this entire script in Supabase SQL Editor.
create extension if not exists pgcrypto;

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null,
  content text not null,
  category text not null default 'Technology',
  cover_image text,
  published boolean not null default false,
  author_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.posts enable row level security;

drop policy if exists "Anyone can read published posts" on public.posts;
create policy "Anyone can read published posts"
on public.posts for select
using (published = true or auth.uid() = author_id);

drop policy if exists "Authors can insert own posts" on public.posts;
create policy "Authors can insert own posts"
on public.posts for insert to authenticated
with check (auth.uid() = author_id);

drop policy if exists "Authors can update own posts" on public.posts;
create policy "Authors can update own posts"
on public.posts for update to authenticated
using (auth.uid() = author_id)
with check (auth.uid() = author_id);

drop policy if exists "Authors can delete own posts" on public.posts;
create policy "Authors can delete own posts"
on public.posts for delete to authenticated
using (auth.uid() = author_id);

create index if not exists posts_published_created_idx
on public.posts (published, created_at desc);
create index if not exists posts_category_idx
on public.posts (category);
