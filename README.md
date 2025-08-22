# 🛒 NextShop - eCommerce Project

## 📌 Project Description
**NextShop** একটি আধুনিক eCommerce ওয়েব অ্যাপ্লিকেশন যা তৈরি করা হয়েছে **Next.js (App Router)** এবং **NextAuth.js** দিয়ে।  
এখানে ইউজাররা public landing page ও product list দেখতে পারে, প্রোডাক্টের বিস্তারিত পেজে যেতে পারে এবং লগইন করার পর protected dashboard থেকে নতুন প্রোডাক্ট যোগ করতে পারে।  
Authentication এর জন্য Google OAuth ব্যবহার করা হয়েছে।  


🌐 Live Demo

🔗 Live Project Link
---

## 🚀 Features
- 🔐 User Authentication (NextAuth + Google OAuth)
- 🛍️ Product Listing with Details Page
- ➕ Add Product (Protected Dashboard)
- 🎨 Modern UI with **TailwindCSS + Framer Motion**
- 📱 Fully Responsive (Mobile, Tablet, Desktop)
- 🌐 MongoDB Database Integration
- ⚡ Fast and SEO-friendly (Next.js 15)

---

## ⚙️ Tech Stack
- **Frontend:** Next.js 15, React 19, Tailwind CSS, Framer Motion  
- **Backend:** Next.js API Routes, MongoDB, bcryptjs  
- **Authentication:** NextAuth.js (Google OAuth)  
- **UI & Icons:** Lucide-react, React Icons, React Responsive Carousel  
- **Notifications:** React Hot Toast  

---
🧭 Route Summary

/ → Landing Page

/products → All Products

/products/[id] → Single Product Details

/dashboard → User Dashboard (Protected)

/dashboard/add-product → Add New Product (Protected)

/api/auth/* → NextAuth Authentication Routes





