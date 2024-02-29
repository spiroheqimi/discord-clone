import AccessOptions from "./Components/AccessOptions";

export default function Home() {
  return (
    <main className="bg-slate-900 h-screen w-screen flex items-center overflow-hidden py-20">
      <section className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-white text-2xl lg:text-3xl font-bold"> Discord Clone </h1>
        <div className="w-full h-full flex">
            <AccessOptions/>
        </div>
      </section>
    </main>
  );
}
