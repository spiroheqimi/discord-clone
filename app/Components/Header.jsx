import Link from 'next/link'
import React from 'react'
import { GoHomeFill } from "react-icons/go";

export default function Header() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-end">
      <Link href="/">
        <button className="bg-green-600 rounded-md py-3 px-3 h-10 cursor-pointer text-white"> <GoHomeFill size={20} /></button>
      </Link>
      </div>
    </div>
  )
}
