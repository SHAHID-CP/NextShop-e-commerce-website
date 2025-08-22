"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { Toaster, toast } from "react-hot-toast";

export default function AddProductPage() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  if (!session) {
    return (
      <p className="text-center mt-10 text-red-500 text-lg font-semibold">
        You must be logged in!
      </p>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const name = form.elements.namedItem("name").value;
    const description = form.elements.namedItem("description").value;
    const price = form.elements.namedItem("price").value;
    const imageFile = form.elements.namedItem("image").files?.[0];

    if (!imageFile) {
      toast.error("Please select an image");
      setLoading(false);
      return;
    }

    try {
      // 1. Upload image to imgbb
      const formData = new FormData();
      formData.append("image", imageFile);

      const imgbbRes = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        { method: "POST", body: formData }
      );

      const imgbbData = await imgbbRes.json();
      const imageUrl = imgbbData.data.url;

      // 2. Send product to backend API
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description, price, image: imageUrl }),
      });

      if (res.ok) {
        toast.success("✅ Product added successfully!");
        form.reset();
      } else {
        toast.error("❌ Failed to add product");
      }
    } catch (error) {
      toast.error("❌ Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div className="px-4 md:px-8 lg:px-20 py-12">
      {/* React Hot Toast */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-lg mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-extrabold text-[#ff6900] mb-6 text-center">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6900] transition"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6900] transition"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6900] transition"
            required
          />

          <input
            type="file"
            name="image"
            accept="image/*"
            className="w-full text-gray-600"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#ff6900] text-white p-3 rounded-xl text-lg font-semibold transition-all hover:bg-[#e85a00] shadow-md hover:shadow-lg disabled:opacity-50"
          >
            {loading ? "Uploading..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}
