---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Building an Accessible Web App for the Visually Impaired"
pubDate: 2025-04-29
description: "A browser-based assistive tool for blind users using TensorFlow.js, speech, and camera APIs — why I’m building it, and how I’m approaching the challenge."
author: "Sidharth"
category: "code-diary"
tags: ["tech", "code-diary"]
image:
  url: "https://www.eyenavi.jp/en/img/mainv_01.webp"
  alt: "phone in hand"
readingTime: "3 min"
---

# Building an Accessible Web App for the Visually Impaired — My Journey, Inspiration & Vision 👁️‍🗨️

> “Technology should empower *everyone*, especially those who need it the most.”

## 🌟 The Idea

While most developers showcase cool AI demos — hand gestures to play games, facial filters, or fancy object detection — I kept asking myself: **“Who’s actually benefiting from this?”**

That’s where my idea was born:  
**A browser-based assistive tool for visually impaired people** that uses real-time object detection, audio feedback, and possibly haptic feedback to help navigate the world around them.

## 👓 The Inspiration

In college (DU), I came across a professor who is blind. Watching how he engaged with tech through accessibility tools — often limited or clunky — made me think:  
> *"What if I could use the same tools we developers play around with, but build something that could actually assist someone like him in day-to-day life?"*

That’s where it all started.

## 🔍 The Core Vision

This app will work in the browser and allow the user to:

- Use their device camera to **scan their surroundings**
- **Detect objects** in real-time (cars, people, potholes, signs, etc.)
- Provide **audio feedback** (using Web Speech API)
- Optionally provide **vibration/haptic patterns** for non-verbal alerts
- Ask users during setup if they prefer **voice and/or vibration feedback**

All with a focus on **simplicity, accessibility, and ease-of-use**.

## 🛠️ Tech Stack

Here’s what I’m planning to use:

| Feature                   | Tech / API                         |
|---------------------------|------------------------------------|
| Object Detection          | TensorFlow.js + COCO-SSD           |
| Camera Access             | `getUserMedia()` Web API           |
| Voice Instructions        | Web Speech API                     |
| Vibration Feedback        | Vibration API (mobile-supported)   |
| UI                        | Next.js (React-based framework)    |
| Accessibility Enhancements| ARIA roles, voice commands (future)|

## 🧪 Future Features

- **Pothole detection** (custom-trained model on Indian roads)
- **QR code recognition** for reading signs/info
- **Face/person detection** with alerts
- **Offline support** via PWA capabilities
- Integrating **voice-based interaction** to operate the app hands-free

## 💭 Why Not Just Build It With OpenCV?

Yes, OpenCV is powerful, but most of these projects:
- Require local setup
- Are demo-heavy, not user-focused
- Aren’t made for **real people** who aren’t tech-savvy

My goal?  
Build something that **just works in a browser** — no setup, no installs.  
If someone can open Google Chrome, they should be able to use this app.

## 🧠 Lessons I Plan to Learn Along the Way

- TensorFlow.js for real-time detection
- Accessibility-first UI/UX
- Using browser APIs in production
- Deploying models and optimizing for performance
- Possibly training a custom model for potholes or Indian-specific objects

## 🤝 Call to Collaborate

If you're also working on **accessibility, browser-based ML, or open-source assistive tech**, I'd love to connect or collaborate.  
Let’s make tech *actually helpful* for those who need it most.

---


**Connect with me on LinkedIn:** [@sidharthsangelia](https://www.linkedin.com/in/sidharthsangelia/)  

---

Thanks for reading. Let’s build for impact. 💙
