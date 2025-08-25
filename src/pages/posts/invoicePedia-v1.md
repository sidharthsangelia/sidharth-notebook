---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Building InvoicePedia: My Journey into Full-Stack Invoicing with Next.js, PostgreSQL, and Stripe"
pubDate: 2025-05-02
description: "Exploring my first full-stack app — an invoicing platform with personal and organizational support, built using Next.js, PostgreSQL, Stripe, and more. This blog walks through the tech, challenges, and the lessons I learned."
author: "Sidharth"
category: "code-diary"
tags: ["tech", "NextJs"]
image:
  url: "https://www.thesidharth.com/_next/image?url=%2Finvoicepedia.png&w=1080&q=75"
  alt: "invoicepedia landing hero section"
readingTime: "3 min"
---


Over the past few weeks, I’ve been working on a project called **InvoicePedia** — a full-stack web app that lets users manage and send invoices both **personally** and through **organizations**, with the added bonus of enabling **Stripe payments**. It’s been a fantastic journey full of technical exploration and learning, especially as this was my **first time working with PostgreSQL** and **server-side rendering at scale using Next.js 15**.

In this post, I’ll walk through what the app does, how I built it, and what challenges (including some deployment headaches!) I’ve encountered along the way.

---

## 🧾 What is InvoicePedia?

**InvoicePedia** is a modern invoicing platform where users can:
- Sign in using **Clerk**
- Create and manage invoices as a personal user
- Create and manage invoices within an organization
- Accept payments through **Stripe**
- View customer details and invoice history
- Get a simple, clean interface powered by **Tailwind CSS** and **shadcn/ui**

I intentionally kept the UI minimal in this version, as my primary goal was getting the **functionality right** — but a UI/UX overhaul is definitely coming next.

---

## 🛠️ Tech Stack & Why I Chose It

| Tech            | Why I Used It                              |
|-----------------|--------------------------------------------|
| **Next.js 15**  | Modern full-stack React framework          |
| **Tailwind CSS**| Quick and responsive styling               |
| **shadcn/ui**   | Beautiful and accessible UI components     |
| **Clerk**       | Easy and secure user authentication        |
| **PostgreSQL**  | Strong relational database (my first time!)|
| **Drizzle ORM** | Type-safe queries with schema confidence   |
| **Stripe**      | Reliable payment gateway integration       |
| **Xata**        | Flexible cloud data layer (used selectively)|
| **Vercel**      | Seamless Next.js deployment                |

Working with this stack gave me a solid taste of how modern SaaS products are architected.

---

## 🧠 Learning PostgreSQL — A Great but Tricky Ride

This project marked my **first experience with PostgreSQL** and let me tell you — it was both rewarding and challenging.

Getting basic queries to work was simple enough, but writing **dynamic, relational joins with filters** took a bit of time and effort to get right. Drizzle ORM helped a lot by making things type-safe, but learning to think relationally (especially when combining personal and organizational invoice logic) was a key milestone in my growth.

---

## 💸 Stripe Integration

Stripe integration was smoother than I expected. I used **Stripe Checkout** to keep things simple and secure. Users can generate invoices and then pay through a secure Stripe page — a great way to simulate real-world invoice payments in a modern web product.

---

## 👥 Personal vs Organization Accounts

One unique part of this app is how it handles **dual context**: users can either operate on their own or within an organization.

- If they’re acting as an **individual**, their invoices are tied to their user ID.
- If they belong to an **organization**, their invoices are scoped to that organization.

This separation allowed me to explore **multi-tenant database patterns** and how Clerk makes handling organizations easier through its API.

---

## 🚧 Current Roadblocks (Deployment 😤)

As of writing this post, I’m currently stuck on **deployment issues with Vercel**.

Even though everything works perfectly in development, my **`page.tsx` files are throwing type errors related to parameter types in dynamic routes**, which is currently preventing the production build from succeeding. I’m actively debugging this, and plan to resolve and deploy the live version soon.

---

## 🎨 What's Next?

Although the app is feature-complete, the current UI is quite **basic**. I focused on functionality over form — but design definitely matters, and it’s high on my list of next improvements.

**Planned next steps:**
- Improve UI/UX with better layout and styling
- Add PDF download/export for invoices
- Enable recurring invoice creation
- Build a better dashboard and analytics
- Fix deployment and ship a live demo 🚀

---

## 📚 Final Thoughts

Building InvoicePedia has been one of the most **comprehensive learning projects** I’ve taken on. From exploring backend data modeling with PostgreSQL, to user management with Clerk, and handling real money flow with Stripe — every step taught me something new.

This is just the beginning of a bigger journey toward building real-world, production-level web apps. I’m excited to continue improving this project and share more updates along the way.

If you’re curious about the code, feel free to check out the [GitHub repo](https://github.com/sidharthsangelia/invoicepedia) — and if you’ve faced similar deployment challenges with Next.js 15, I’d love to hear how you solved them!

---

_Thanks for reading — and stay tuned for the live demo!_
