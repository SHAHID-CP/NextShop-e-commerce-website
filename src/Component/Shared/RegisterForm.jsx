"use client";
import React from "react";
import Link from "next/link";

import SocialLogin from "@/app/login/components/SocialLogin";
import { registerUser } from "@/app/actions/auth/registerUser";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    await registerUser({ name, email, password });
    toast.success("Register Successful!");
    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto space-y-6 bg-white p-8 rounded-2xl shadow-lg"
    >
      {/* Name */}
      <label className="block">
        <span className="block text-gray-700 font-semibold mb-2">Name</span>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </label>

      {/* Email */}
      <label className="block">
        <span className="block text-gray-700 font-semibold mb-2">Email</span> 
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </label>

      {/* Password */}
      <label className="block">
        <span className="block text-gray-700 font-semibold mb-2">Password</span>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </label>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-3 bg-orange-500 text-white font-bold rounded-xl shadow-md hover:bg-orange-600 transition"
      >
        Sign Up
      </button>

      {/* Divider */}
      <p className="text-center text-gray-500 font-medium">Or Sign In with</p>
      <SocialLogin />

      {/* Redirect */}
      <p className="text-center text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="text-orange-500 font-bold hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
}
