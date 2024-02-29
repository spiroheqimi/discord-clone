import { FaDiscord } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="bg-gray-800 h-screen w-20 fixed top-0 left-0 flex flex-col items-center justify-start pt-3">
      <button className="bg-gray-700 p-2 rounded-3xl hover:rounded-2xl hover:bg-green-600 transition-all duration-400 ease-linear">
        <FaDiscord size={36} color="FFFFFF"/>
      </button>
      {/*  ICONS */}
    </div>
  )
}


/* 
  
*/