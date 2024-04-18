import React from 'react'
import { FaXmark } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Toaster } from 'sonner';
import { SignUpButton } from '@/contexts/authContext';
import { useForm } from "react-hook-form"


export const metadata = {
    title: "Create Account",
};

const page = () => {
    // const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState: { errors },
    //   } = useForm()
    return (
        <>
            <section className="bg-black min-h-screen flex justify-center items-center">
                <div className="md:w-[400px] p-5 bg-white rounded-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            Logo
                        </div>
                        <Link href="/" className='cursor-pointer'>
                            <FaXmark size={30} />
                        </Link>
                    </div>
                    <p className="font-bold">Please fill in your details to get started</p>
                    <form>
                        <div className="my-4">
                            <label className="font-bold" htmlFor="name">Name
                                <input name="name" type="text" id="name" className="text-base pl-2 h-10 rounded-sm w-full border-2 border-black" />
                            </label>
                        </div>
                        <div className="my-4">
                            <label className="font-bold" htmlFor="email">Email Address
                                <input name="email" type="text" id="" className="text-base pl-2 h-10 rounded-sm w-full border-2 border-black" />
                            </label>
                        </div>
                        <div className="my-4">
                            <label className="font-bold" htmlFor="password">Password
                                <input name="password"
                                    type="password" id="" className="text-base pl-2 h-10 rounded-sm w-full border-2 border-black" />
                            </label>
                        </div>
                        <SignUpButton />
                        <p className='text-center font-extralight py-1'>or</p>
                    </form>
                    <div className='login-options flex flex-col gap-3 font-medium'>
                        <button className='flex items-center justify-center gap-2 border-[1px] border-black rounded-3xl py-2 hover:bg-black hover:text-white duration-300'>Continue with Google</button>
                    </div>
                    <p className="text-sm md:text-base mt-4 font-semibold ">Already have an account? <Link className="underline underline-offset-2 text-BLUE" href="/login">Log In</Link></p>
                </div>
            </section>

        </>
    )
}

export default page