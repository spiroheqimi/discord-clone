
import Link from "next/link"

export default function AccessOptions() {
  return (
  <div className="w-full flex flex-col justify-center gap-3 py-5">
    <div className="w-full py-2 px-20">
      <p className="text-white font-bold text-xl lg:text-3xl text-center"> This project is still a work in progress </p>
      <p className="text-white font-bold text-xl lg:text-3xl text-center">  Choose one of the ways to interact with the app </p>
    </div>
    <div className="w-full flex justify-center gap-3">
      <Link href="/Login">
       <button className="button-style" > Login </button>
      </Link>
      <Link href="/Register">
       <button className="button-style" > Register </button>
      </Link>
      <Link href="/Home">
       <button className="button-style" > Guest </button>
      </Link>
    </div>
  </div>

)}

