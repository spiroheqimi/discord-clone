"use client";

import AccessOptions from "./Components/AccessOptions";
import Sidebar from "./Components/Sidebar";
import RegisterForm from "./Components/RegisterForm";
import LoginForm from "./Components/LoginForm";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Home() {
  const { isLoggedIn, login, logout } = useAuth();
  const [ userChoice, setuserChoice ] = useState("Login");
  console.log(isLoggedIn);
  
  return (
    <main className="bg-slate-900 h-screen w-screen flex items-center overflow-hidden py-20">
      {isLoggedIn ? <Sidebar /> : false}
      <section className="w-full h-full flex flex-col justify-center items-center gap-6">
        <h1 className="text-white text-2xl lg:text-3xl font-bold"> Discord Clone </h1>
        <div className="w-full h-full flex max-tablet:flex-col">

          <div className="w-full flex">
            <AccessOptions/>
          </div>

          <div className="w-full h-full flex min-tablet:items-center">
            { userChoice === "Login" && isLoggedIn === false ? <LoginForm/> 
            : userChoice === "Register" && isLoggedIn === false ? <RegisterForm/> 
            : false }
          </div>
        </div>
      </section>
    </main>
  );
}
