import React, { useState } from "react";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = async (e) => {
    e.preventDefault();

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res);
    } catch (error) {
      alert(error);
    }
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form className="sm:w-[300px] w-[100%] bg-[black] flex flex-col px-[30px] py-[40px]  gap-4">
      <h1 className="text-2xl font-bold	text-[white]">Sign In</h1>
      <input
        type="email"
        placeholder="email"
        className="p-2 outline-0 border-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="p-2 outline-0 border-none"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="p-2 outline-0 border-none bg-[#e40914] text-[white] cursor-pointer"
        onClick={signIn}
      >
        Sign in
      </button>
      <h4 className="text-[grey] text-[12px]">
        New to Netflix?{" "}
        <span
          className="text-[white] font-bold hover:cursor-pointer hover:underline"
          onClick={register}
        >
          Sign up now.
        </span>
      </h4>
    </form>
  );
};

export default SignUp;
