

export default function AccessOptions() {
  return (
  <div className="w-full flex flex-col justify-center gap-3 py-5">
    <div className="w-full py-2 px-20">
      <p className="text-white font-bold text-xl lg:text-3xl text-center"> This is a work in progress </p>
      <p className="text-white font-bold text-xl lg:text-3xl text-center">  Choose one of the ways to interact with the app </p>
    </div>
    <div className="w-full flex justify-center gap-3">
    <button className="button-style" onClick={() => {setuserChoice("Login")}} > Login </button>
    <button className="button-style" onClick={() => {setuserChoice("Register")}} > Register </button>
    <button className="button-style" onClick={() => {login()}}> Guest </button>
    </div>
  </div>

)}
