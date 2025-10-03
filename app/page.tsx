
"use client";
import React from "react";
import { motion } from "framer-motion";
import { BookOpen, NotebookPen, Feather, Mail, ArrowRight, Star, AudioLines, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const BOOKS = [
  {
    title: "River Years",
    subtitle: "A Memoir of Resilience",
    cover: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop",
    blurb: "Through floods, fields, and family promises, a life stitched together with quiet devotion.",
    tag: "Featured",
  },
  {
    title: "Letters to the Present",
    subtitle: "Notes on Memory & Grace",
    cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
    blurb: "Short reflections that celebrate the magic in everyday moments—coffee, sunsets, first laughter.",
    tag: "New",
  },
  {
    title: "One Road, One Spirit",
    subtitle: "Two Paths Becoming One",
    cover: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    blurb: "A love story about choosing each other again and again across decades and oceans.",
    tag: "Bestseller",
  },
];

const POSTS = [
  {
    title: "The Father I Remember",
    date: "September 20, 2025",
    excerpt: "He walked quickly, spoke softly, and built quietly. In 1972 the river swelled—and so did our courage...",
    image: "https://images.unsplash.com/photo-1519681390377-3f6f06bb5042?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Sunset on the Porch",
    date: "August 14, 2025",
    excerpt: "Cornfields breathe, the day exhales. I tuck another small, perfect moment into my pocket...",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Devil's Lake, Twenty Years",
    date: "July 2, 2025",
    excerpt: "Every trail is a chapter; every photo, a page I keep returning to...",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800">
      <SiteHeader />
      <Hero />
      <FeaturedBooks />
      <Journal />
      <MemoriesStrip />
      <Newsletter />
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <Feather className="h-6 w-6" />
          <span className="font-serif text-xl tracking-wide">MemoryPress</span>
        </div>
        <nav className="hidden gap-6 md:flex">
          <a href="#books" className="text-sm hover:opacity-80">Books</a>
          <a href="#journal" className="text-sm hover:opacity-80">Memoir Journal</a>
          <a href="#subscribe" className="text-sm hover:opacity-80">Subscribe</a>
          <a href="#about" className="text-sm hover:opacity-80">About</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button className="rounded-2xl px-4" variant="default">
            Shop
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1518961292281-2b2a4acb0963?q=80&w=2400&auto=format&fit=crop"
          alt="Warm library background"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/70 to-white" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-20 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
        <div className="space-y-6">
          <h1 className="font-serif text-4xl leading-tight md:text-5xl">
            A home for <span className="underline decoration-amber-400 decoration-4 underline-offset-8">memoirs</span>
            , stories, and the little moments that make a life.
          </h1>
          <p className="max-w-prose text-neutral-700">
            KIAB Read free chapters, browse the library, and get new reflections delivered to your inbox.
            Build your legacy in words—and invite others into the story.
          </p>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button className="rounded-2xl px-5"><BookOpen className="mr-2 h-4 w-4"/> Read Free Chapters</Button>
            <Button className="rounded-2xl px-5" variant="secondary"><NotebookPen className="mr-2 h-4 w-4"/> Browse Library</Button>
            <Button className="rounded-2xl px-5" variant="outline"><Mail className="mr-2 h-4 w-4"/> Subscribe</Button>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Star className="h-4 w-4" /> Trusted by readers who love heartfelt, lived‑in stories.
          </div> 
        
        </motion.div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
>
  <div className="relative">
    <div className="rounded-3xl border bg-white/80 p-4 shadow-xl backdrop-blur">
              {BOOKS.map((b, i) => (
                <div key={i} className="overflow-hidden rounded-2xl border">
                  <img src={b.cover} alt={b.title} className="h-40 w-full object-cover"/>
                </div>
              ))}
    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
}

function FeaturedBooks() {
  return (
    <section id="books" className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="font-serif text-3xl">Featured Books</h2>
        <a className="text-sm underline underline-offset-4 hover:opacity-80" href="#">See all</a>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {BOOKS.map((b, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
          >
            <Card className="overflow-hidden rounded-3xl">
              <CardHeader className="p-0">
                <div className="relative">
                  <img src={b.cover} alt={`${b.title} cover`} className="h-64 w-full object-cover" />
                  <span className="absolute left-3 top-3 rounded-full bg-amber-500 px-3 py-1 text-xs font-medium text-white">
                    {b.tag}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-1 p-5">
                <CardTitle className="font-serif text-xl">{b.title}</CardTitle>
                <p className="text-sm text-neutral-600">{b.subtitle}</p>
                <p className="pt-2 text-sm">{b.blurb}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-between p-5">
                <Button className="rounded-2xl px-4">Read Sample</Button>
                <Button className="rounded-2xl px-4" variant="secondary">
                  Buy <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Journal() {
  return (
    <section id="journal" className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="font-serif text-3xl">Memoir Journal</h2>
        <a className="text-sm underline underline-offset-4 hover:opacity-80" href="#">Browse all posts</a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {POSTS.map((p, idx) => (

<motion.article
  key={idx}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: idx * 0.05 }}
>
  <div className="overflow-hidden rounded-3xl border bg-white">
    <img src={p.image} alt="post" className="h-48 w-full object-cover" />
    <div className="space-y-2 p-5">
      <p className="text-xs uppercase tracking-wide text-amber-700">{p.date}</p>
      <h3 className="font-serif text-xl">{p.title}</h3>
      <p className="text-sm text-neutral-700">{p.excerpt}</p>
      <a className="inline-flex items-center text-sm underline underline-offset-4 hover:opacity-80" href="#">
        Read story <ArrowRight className="ml-1 h-4 w-4" />
      </a>
    </div>
  </div>
</motion.article>
        ))}
      </div>
    </section>
  );
}

function MemoriesStrip() {
  return (
    <section id="about" className="border-y bg-white/70">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-12 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="font-serif text-3xl">Preserve stories. Share legacy.</h2>
          <p className="text-neutral-700">
            This website is a library, a journal, and a bookstore—made for memoirs, family histories, and
            the small moments that shape who we are. Publish chapters, add photos and audio, and invite loved ones
            to read along.
          </p>
          <ul className="grid gap-2 text-sm">
            <li className="flex items-center gap-2"><ImageIcon className="h-4 w-4"/> Photo galleries per chapter</li>
            <li className="flex items-center gap-2"><AudioLines className="h-4 w-4"/> Optional audio narration</li>
            <li className="flex items-center gap-2"><BookOpen className="h-4 w-4"/> PDF / ePub downloads</li>
          </ul>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1519682577862-22b62b24e493?q=80&w=1600&auto=format&fit=crop",
          ].map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
          >
            <div className="overflow-hidden rounded-2xl border">
              <img src={src} alt="memory" className="h-28 w-full object-cover" />
            </div>
          </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section id="subscribe" className="mx-auto max-w-3xl px-4 py-16 text-center">
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className="font-serif text-3xl">Get new chapters in your inbox</h2>
        <p className="mx-auto mt-2 max-w-prose text-neutral-700">
          Join the newsletter to receive fresh memoir entries, behind‑the‑scenes notes, and early access to books.
        </p>
        <form className="mx-auto mt-6 flex max-w-xl items-center gap-2">
          <Input type="email" placeholder="you@example.com" className="h-11 rounded-2xl" />
          <Button type="button" className="h-11 rounded-2xl px-6">
            Subscribe
          </Button>
        </form>
        <p className="mt-2 text-xs text-neutral-500">No spam. Unsubscribe anytime.</p>
      </motion.div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Feather className="h-5 w-5" />
            <span className="font-serif text-lg">MemoryPress</span>
          </div>
          <p className="text-sm text-neutral-600 max-w-sm">
            A gentle home for memoirs, family histories, and books.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="mb-2 font-medium">Explore</h4>
          <ul className="space-y-1">
            <li><a className="hover:underline" href="#books">Books</a></li>
            <li><a className="hover:underline" href="#journal">Journal</a></li>
            <li><a className="hover:underline" href="#subscribe">Subscribe</a></li>
          </ul>
        </div>
        <div className="text-sm">
          <h4 className="mb-2 font-medium">Resources</h4>
          <ul className="space-y-1">
            <li><a className="hover:underline" href="#">Press Kit</a></li>
            <li><a className="hover:underline" href="#">Audio Narration</a></li>
            <li><a className="hover:underline" href="#">ePub / PDF</a></li>
          </ul>
        </div>
        <div className="text-sm">
          <h4 className="mb-2 font-medium">Connect</h4>
          <ul className="space-y-1">
            <li><a className="hover:underline" href="#">Contact</a></li>
            <li><a className="hover:underline" href="#">Instagram</a></li>
            <li><a className="hover:underline" href="#">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-neutral-500">© {new Date().getFullYear()} MemoryPress · All rights reserved.</div>
    </footer>
  );
}
