# 🛒 NextShop - eCommerce Project

## 📌 Project Description
**NextShop** একটি আধুনিক eCommerce ওয়েব অ্যাপ্লিকেশন যা তৈরি করা হয়েছে **Next.js (App Router)** এবং **NextAuth.js** দিয়ে।  
এখানে ইউজাররা public landing page ও product list দেখতে পারে, প্রোডাক্টের বিস্তারিত পেজে যেতে পারে এবং লগইন করার পর protected dashboard থেকে নতুন প্রোডাক্ট যোগ করতে পারে।  
Authentication এর জন্য Google OAuth ব্যবহার করা হয়েছে।  

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

## 📦 Dependencies
```json
"dependencies": {
  "bcryptjs": "^3.0.2",
  "framer-motion": "^12.23.12",
  "lucide-react": "^0.540.0",
  "mongodb": "^6.18.0",
  "motion": "^12.23.12",
  "next": "15.5.0",
  "next-auth": "^4.24.11",
  "react": "19.1.0",
  "react-dom": "19.1.0",
  "react-hot-toast": "^2.6.0",
  "react-icons": "^5.5.0",
  "react-responsive-carousel": "^3.2.23"
}
