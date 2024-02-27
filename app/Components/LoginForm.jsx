import { useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState("");
  console.log(data);

  return (
    <form className="w-full flex flex-col justify-center items-center gap-5" onSubmit={handleSubmit((data)=> setData(JSON.stringify(data)))}>
      <p className="text-white text-2xl font-bold">Login</p>
      <input className="form-style w-96 max-tablet:w-72" {...register("email", { required: true, pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/ })} placeholder="Email" />
      <input className="form-style w-96 max-tablet:w-72" {...register("password", { required: true, maxLength: 20 })} placeholder="Password" type="password" />
      <input className="bg-blue-500 text-white py-2 px-8 text-center cursor-pointer rounded-md" type="submit" value="Login" />
    </form>
  )
}
