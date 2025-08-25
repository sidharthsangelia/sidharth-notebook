---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Leveling Up Through Truly IAS Blog: Learning, Failing, and Building Smarter"
pubDate: 2025-07-07
description: "How a simple internship task turned into one of my biggest learning experiences—building a full-stack blog, exploring MongoDB, and now planning AI integrations across my projects."
author: "Sidharth"
category: "code-diary"
tags: ["tech", "code-diary", "NextJs","Challenge"]
image:
  url: "https://www.thesidharth.com/_next/image?url=%2Ftruly-ias-blog.png&w=1080&q=75"
  alt: "truly-ias-blog-hero"
readingTime: "3 min"
---


When I applied for a recent internship, I didn’t expect the **assignment** they gave me to be a whole project in itself.

I was asked to build a **full-stack blog website**, but here’s the catch — it had to be built with **MongoDB**, **Mongoose**, and **Next.js API Routes**. Up until that point, I was much more comfortable using **Prisma**, **PostgreSQL**, and **Server Actions**.

But I took the challenge head-on — and I’m glad I did.

---

## 🚀 What I Built

I ended up creating the **Truly IAS Blog** — a modern, clean, and content-rich blog platform where:

- ✍️ Rich-text editing is powered by **Tiptap**  
- 🖼️ Blog images are uploaded via **Cloudinary** and automatically **content-aware cropped** for thumbnails  
- 🔐 Auth is handled by **Clerk**  
- 🌓 Dark and light mode UI built with **Shadcn/UI** and **Tailwind CSS**

You can check out the [**Live Demo**](https://truly-ias-blog.vercel.app/) or [**Source Code**](https://github.com/sidharthsangelia/truly-ias-blog).

While I wasn’t selected for the internship, I walked away with something far more valuable — **experience**. It forced me out of my comfort zone and helped me understand MongoDB and Mongoose deeply.

---

## 🧠 What I Plan to Do Next

This project won’t just sit in my GitHub, because **v2 is coming**. And here’s what I’m planning:

- Migrate to **Prisma + PostgreSQL**  
- Add **Server Actions** for more seamless backend logic  
- Expand the schema with categories, authors, trending posts  
- Improve the UI  
- Add **AI assistance for content creation** (more on that in a second!)  
- Integrate **admin panel analytics with charts**

---

## 🎯 My AI Learning Plan

For a long time, I wanted to integrate AI into my projects — but there was one major blocker: **OpenAI credits**.  
Well, **not anymore**. I finally bought some, and now I’m diving into the world of AI integration with full focus.

I already have an idea I’m working on — a SaaS tool where users can:

> 🔗 Input a YouTube video link or upload a video file →  
> 🧠 Get an **SEO-optimized blog post** based on the content

Here’s the current progress:

- ✅ Using **Whisper-1** to transcribe videos (and yes, the accuracy is surprisingly good!)  
- 🔜 Next steps: Feed that transcript into a powerful LLM for blog post generation

This project is going to teach me how to use AI in production — and I’m super excited to integrate similar functionality in **Truly IAS Blog**, **Dropify**, and **Invoicepedia** once my exams wrap up at the end of July.

---

## 🔄 Learning Background Jobs & Queues

One thing I’ve realized — when building AI SaaS tools like this, **you can't keep the user waiting on a loading screen forever**.  
That’s why my next big learning goal is understanding **background jobs and queuing systems** using tools like **Inngest**.  

I want to figure out how to:

- Schedule and run background jobs efficiently  
- Queue transcription + blog generation flows  
- Show real-time progress/status to users

---

## 🧱 What’s Driving Me

Right now, my only focus is on **learning as much as I can by building things**.  
I’ve got 3 months post-exams, and I’m dedicating that time fully to:

- Deepening my backend knowledge  
- Mastering AI integrations  
- Understanding queuing and job scheduling  
- Creating real products that solve real problems

---

If you’re also in this learning-by-building phase, let’s connect — or just drop a message. Would love to exchange ideas or collaborate on projects.

More updates coming soon 🚀  
— Sidharth Sangelia
