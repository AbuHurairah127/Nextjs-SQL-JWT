import Image from "next/image";
import logo from "./../../../assets/logoipsum.svg";
import { montserrat } from "@/app/page";
const Page = () => {
  return (
    <main
      className="h-screen w-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] flex justify-center items-center"
      style={{ fontFamily: montserrat.style.fontFamily }}
    >
      <div className="w-3/4 md:w-1/2 h-3/4 backdrop-blur-lg bg-white/10  drop-shadow-lg rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl border border-white/10">
        <div className="bg-white h-[50%] lg:w-[50%] lg:h-full flex flex-col items-center justify-around">
          <div className="w-[70%]">
            <h1 className="text-4xl font-bold text-center p-5 text-[#302b63]">
              Welcome
            </h1>
            <p className="text-center text-[#302b63]">
              Create a new account to get new book related to technology
            </p>
          </div>
          <Image src={logo} alt={"logo"} />
        </div>
        <div className="flex flex-col items-center lg:w-[50%] min-h-[50%] lg:h-full justify-around p-5">
          <h1 className="text-4xl font-bold text-center lg:p-5 text-white ">
            Register
          </h1>
          <form>
            <label htmlFor="name" className="text-white block">
              Name
            </label>
            <input
              type="text"
              placeholder="e.g: John Doe"
              className="px-3 py-1.5 w-60 rounded mt-3 "
            />
            <label htmlFor="email" className="text-white block mt-3">
              Email
            </label>
            <input
              type="email"
              placeholder="e.g: abc@example.com"
              className="px-3 py-1.5 w-60 rounded mt-3 "
            />
            <button
              type="submit"
              className="block m-auto bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-10 py-1.5 rounded mt-8"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Page;
