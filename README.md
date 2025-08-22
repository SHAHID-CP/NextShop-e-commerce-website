🛒 NextShop – eCommerce Project
📌 Project Description
NextShop একটি simple eCommerce ওয়েব অ্যাপ্লিকেশন যা Next.js 15 (App Router) এবং NextAuth.js ব্যবহার করে তৈরি।
 ইউজাররা public landing page এবং product list দেখতে পারে, product details পেজ ব্রাউজ করতে পারে এবং লগইন করার পর protected dashboard থেকে নতুন প্রোডাক্ট যোগ করতে পারে। Authentication এর জন্য Google OAuth ইন্টিগ্রেশন করা হয়েছে।

🚀 Features
✅ Landing Page (Navbar, Hero, Product Highlights, Footer)


✅ Login with Google (NextAuth.js)


✅ Public Product List & Product Details Page


✅ Protected Dashboard → Add Product (Login required)


✅ Authentication handled via NextAuth.js (Google OAuth)


✅ Modern UI with Tailwind + Lucide Icons


✅ Toast notifications & smooth animations with Framer Motion


✅ MongoDB integration for storing product data (optional)



Project Structure
app/
 ├─ layout.tsx                  # Global Layout (Navbar + Footer)
 ├─ page.tsx                    # Landing Page
 ├─ login/page.tsx              # Login Page
 ├─ products/page.tsx           # Product List
 ├─ products/[id]/page.tsx      # Product Details
 ├─ dashboard/add-product/page.tsx # Protected Page (Add Product)
 └─ api/auth/[...nextauth]/route.ts # NextAuth API route
🗺️ Route Summary
/ → Public Landing Page (Navbar, Hero, Product Highlights, Footer)


/login → Google login page, successful login redirects to /products


/products → Public Product List page (shows all products from mock data or DB)


/products/[id] → Product Details page (single product view)


/dashboard/add-product → Protected page, only accessible when logged in (Add new product form)


/api/auth/[...nextauth] → Internal API route for authentication (Google OAuth / Credentials)


/api/products (optional) → Internal API route for fetching & adding products in MongoDB



🛠️ Tech Stack
Frontend: Next.js 15, React 19, TailwindCSS, Framer Motion


Authentication: NextAuth.js (Google OAuth)


Database: MongoDB (with official driver)


UI & Icons: Lucide React, React Icons


Others: React Hot Toast, React Responsive Carousel



📦 Dependencies
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


⚙️ Setup & Installation
1. Clone the Repository
git clone https://github.com/your-username/nextshop.git
cd nextshop

2. Install Dependencies
npm install

3. Environment Variables
Root ডিরেক্টরিতে .env.local ফাইল তৈরি করে নিচের ভ্যারিয়েবল বসাও:
NEXTAUTH_SECRET=your_random_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_secret
DB_USER=your_dbuser
DB_Pass=your_dbpass
DB_NAME=your_dbname

👉 Google OAuth credentials Google Cloud Console থেকে তৈরি করতে হবে।
4. Run the Development Server
npm run dev

Local server: http://localhost:3000

☁️ Deployment
Repo GitHub এ push করো।


Vercel এ প্রজেক্ট ইমপোর্ট করো।


Vercel Dashboard → Project Settings → Environment Variables এ .env.local এর সব keys বসাও।


Deploy → Live site ready 🎉



✍️ Author: [SHAHID]
 📧 Contact: shahid.045l@gmail.com

