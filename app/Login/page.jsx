"use client"

import React from "react";
import LoginForm from "../Components/LoginForm";
import Header from "../Components/Header";

export default function page() {
  return (
    <div className="bg-slate-900 h-screen w-screen flex flex-col items-center overflow-hidden p-16 max-tablet:p-5 gap-20">
      <Header/>
      <LoginForm/>
    </div>
  );
}
