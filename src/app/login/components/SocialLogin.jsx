"use client";

import { FaGoogle } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useEffect } from "react";

export default function SocialLogin() {
  const router = useRouter();
  const session = useSession();

  const handleSocialLogin = (providerName) => {
    signIn(providerName);
  };

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/products");
      toast.success("Successfully Logged IN 🎉");
    }
  }, [session?.status, router]);

  return (
    <button
      onClick={() => handleSocialLogin("google")}
      className="flex justify-center items-center gap-3 w-full border-2 border-orange-600 rounded-lg py-3 px-4 font-semibold text-orange-600 hover:bg-orange-500 hover:text-white transition-all duration-300"
    >
      <FaGoogle className="text-xl" />
      <span>Continue with Google</span>
    </button>
  );
}
