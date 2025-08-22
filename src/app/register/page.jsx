
import RegisterForm from "@/Component/Shared/RegisterForm";
import React from "react";

export default function RegisterPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-8">Register</h1>
      <section className="container mx-auto">
      
          <RegisterForm />
      </section>
    </>
  );
}