import React from 'react'
import Sidebar from '../Components/Sidebar'
import Header from "../Components/Header";

export default function page() {
  return (
    <div className="bg-slate-900 h-screen w-screen flex flex-col items-center overflow-hidden p-16 max-tablet:p-5 gap-20">
      <Sidebar/>
      <Header/>
      <h1 className="text-white">Hello, Dicord Member #1</h1>
    </div>
  )
}

/* 
  This will be the app page and sidebar will be shown here




*/