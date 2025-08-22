# 🛒 NextShop - eCommerce Project

## 📌 Project Description
**NextShop** একটি আধুনিক eCommerce ওয়েব অ্যাপ্লিকেশন যা তৈরি করা হয়েছে **Next.js (App Router)** এবং **NextAuth.js** দিয়ে।  
এখানে ইউজাররা public landing page ও product list দেখতে পারে, প্রোডাক্টের বিস্তারিত পেজে যেতে পারে এবং লগইন করার পর protected dashboard থেকে নতুন প্রোডাক্ট যোগ করতে পারে।  
Authentication এর জন্য Google OAuth ব্যবহার করা হয়েছে।  


🌐 Live Demo

🔗 [Visit the Live Website](https://e-commerse-project-ruddy.vercel.app/)
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


---

##
## ⚙️ Setup & Installation (Quick Start)

- git clone https://github.com/SHAHID-CP/NextShop-e-commerce-website.git
- cd NextShop-e-commerce-website
- npm install
1. Environment Variables
Root ডিরেক্টরিতে .env.local ফাইল তৈরি করে নিচের ভ্যারিয়েবলগুলো বসাও:


### 2. setup and run

- NEXTAUTH_SECRET=your_random_secret_key
- GOOGLE_CLIENT_ID=your_google_client_id
- GOOGLE_CLIENT_SECRET=your_google_client_secret
- NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_secret
- DB_USER=your_dbuser
- DB_PASS=your_dbpass
- DB_NAME=your_dbname
- Google Client ID & Secret নিতে হবে Google Cloud Console থেকে (OAuth credentials তৈরি করে)।

3. Run Locally

- npm run dev
- Local server: http://localhost:3000

☁️ Deployment
Project GitHub এ push করো।

- Vercel এ project import করো।

- Vercel Dashboard → Project Settings → Environment Variables এ .env.local এর values বসাও।

- Deploy বোতাম চাপলেই Live app ready 


