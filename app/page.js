"use client";
import { useForm } from 'react-hook-form';
import { useState } from "react";

export default function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [passwordMatch, setPasswordMatch] = useState(true);

  const onSubmit = (data) => {
    if (data.password === data.confirmpassword) {
      setPasswordMatch(true);
      console.log(data);
    } else {
      setPasswordMatch(false);
    }
  };

  return (
    <div className="flex justify-center items-center bg-zinc-900 min-h-screen">
    <div className="rounded-xl bg-slate-950 flex flex-col justify-center gap-2 p-2 items-center shadow-2xl shadow-black sm:flex-row  w-[250px]">
      <div className=" shadow-md shadow-black rounded-md  w-full h-full p-5">
        <h1
          className="font-extrabold text-transparent py-2 flex justify-center items-center text-xl text-white mb-5"
        >
          SIGN UP
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center gap-4">

          {/*Entering Full Name*/}
          <div className="relative  flex flex-col justify-center items-start gap-1">
            <p className="text-xs text-white text-shadow-yellow">Enter your Full Name</p>
            <input
              className="w-full rounded-sm py-2 text-xs placeholder:text-xs px-2 outline-none"
              type="text"
              {...register('fullname', { required: true, maxLength: 25 })}
              placeholder="Name"
            />
            {errors.fullname && <p className="text-red-600 font-bold text-md">You need to fill this!</p>}
          </div>



          {/*Entering Email Address*/}
          <div className="relative  flex flex-col justify-center items-start gap-1 col-span-2">
            <p className="text-xs text-white text-shadow-yellow">Enter your Email</p>
            <input
              className="w-full rounded-sm py-2 text-xs placeholder:text-xs px-2 outline-none"
              type="email"
              {...register('email', { required: true })}
              placeholder="Email"
            />
            {errors.email && <p className="text-red-600 font-bold text-md">Email is required!</p>}
          </div>

          {/*Entering Date Of Birth*/}

          {/*DATE*/}
          <div className="flex flex-col">
            <p className="text-xs text-white text-shadow-yellow">Enter Age</p>
            <input
              className="rounded-sm py-2 text-xs placeholder:text-xs px-2 outline-none"
              type="number"
              {...register("dob.date", { required: true, min: 1, max: 31, maxLength: 1 })}
              placeholder="Age"
            />
            {errors.dob && <p className="text-red-600 font-bold text-md text-center">Sorry, this age user has been already registered!</p>}
          </div>

          {/*Password*/}
          <div className="flex flex-col">
            <p className="text-xs text-white text-shadow-yellow">Create Password</p>
            <input
              className="w-full rounded-sm py-2 text-xs placeholder:text-xs px-2 outline-none"
              type="password"
              {...register("password", {
                required: "Create the password!",
                minLength: {
                  value: 1,
                  message: "Minimum Length:8",
                },
                maxLength: {
                  value: 20,
                  message: "Maximum Length:18",
                },
              })}
              placeholder="Password"
            />
            {errors.password && <p className="text-red-600 text-md font-bold">{errors.password.message}</p>}
            {!passwordMatch && <p className="text-red-600 text-md">Passwords do not match!</p>}
          </div>
          <div className="flex justify-center items col-span-2 mt-10">
            <button type="submit" >
              <div class="py-1 px-8 backdrop-blur-xl bg-white rounded-md font-semibold w-full h-full flex justify-center items-center hover:text-white hover:bg-black text-black hover:border-2">
                  Register Now
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}