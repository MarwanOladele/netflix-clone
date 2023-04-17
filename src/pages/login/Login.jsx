import { useState } from "react";
import SignUp from "../signup/SignUp";


const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  console.log(isSignIn);

  return (
    <div>
      <div className="relative h-[100vh] bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://images.frandroid.com/wp-content/uploads/2022/10/netflix-octobre-contenus-2022.jpg')] bg-cover flex justify-center items-center p-[20px]">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="logo"
          className="fixed left-[20px] top-[10px] w-[150px] object-contain"
        />
        <button
          className="fixed right-[20px] top-[10px] px-[20px] py-[10px] text-[white] bg-[#e40914] cursor-pointer font-semibold"
          onClick={() => setIsSignIn(true)}
        >
          Sign In
        </button>

        {isSignIn ? (
          <SignUp />
        ) : (
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl sm:text-5xl text-center text-white font-semibold mb-[20px]">
              Unlimited Films, TV Programme and more.
            </h1>
            <h2 className="text-1xl sm:text-2xl text-center text-white font-normal mb-[20px]">
              Watch anywhere, cancel at any time
            </h2>
            <h3 className="text-1xl text-center text-white font-normal mb-[20px]">
              Ready to watch? Enter your email address to create or restart your
              membership.
            </h3>
            <form className="h-[40px] flex sm:w-[650px] w-[90%]">
              <input
                type="email"
                placeholder="Email Address"
                className="h-full flex-auto w-[75%] p-3 outline-0 border-none"
              />
              <button
                className="text-[white] bg-[#e40914] cursor-pointer font-normal h-full flex-auto w-[25%] sm:text-[16px] text-[12px]"
                onClick={() => setIsSignIn(true)}
              >
                GET STARTED
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
