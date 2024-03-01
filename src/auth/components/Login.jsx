import { FaChevronLeft } from "react-icons/fa";
import { useState } from 'react'
import supabase from '../../lib/supabase/client'
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { signInWithGoogle } from "../../lib/supabase/user";

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '', rememberMe: false })
  function handleFormChange(e) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  async function handleEmailLogin(e) {
    e.preventDefault()
    await supabase.auth.signInWithPassword(formData)
  }
  return (
    <div className='flex'>
      <div className='flex flex-col gap-3 w-3/5 px-32 xl:px-64 py-16 min-w-96'>
        <Link to={'/'} className="flex items-center w-fit gap-2">
          <FaChevronLeft />
          <p>Back to home</p>
        </Link>
        <div className="my-3">
          <p className="font-bold">Sign in</p>
          <p>Use your Google account or enter your email and password below to access your account.</p>
        </div>
        <button onClick={signInWithGoogle} className="flex items-center justify-center gap-2 border bg-white rounded-md p-2">
          <FcGoogle className="text-2xl"/>
          <p>Sign in with Google</p>
        </button>
        <div className="flex items-center justify-center gap-3 opacity-50">
          <hr className="border-black w-2/5" /><p>or</p><hr className="border-black w-2/5" />
        </div>
        <form className="flex flex-col gap-3" onSubmit={handleEmailLogin}>
        <label htmlFor="email">Email <span className="text-red-500">*</span></label>
        <input id='email' name='email' value={formData.email} onChange={handleFormChange} className="focus:outline-emerald-700 border rounded-md p-2" type="text" autoComplete="email" />
        <label htmlFor="password">Password <span className="text-red-500">*</span></label>
        <input id='password' name='password' value={formData.password} onChange={handleFormChange} className="focus:outline-emerald-700 border rounded-md p-2" type="text" />
        <div className="flex gap-1 lg:gap-2 cursor-pointer w-fit">
          <input className='cursor-pointer' id="rememberMe" name="rememberMe" value={formData.rememberMe} type="checkbox" />
          <label className="cursor-pointer" htmlFor="rememberMe">Remember me</label>
        </div>
        <button className="rounded-md p-2 bg-emerald-700 text-white" type="submit" onSubmit={handleEmailLogin}>Login</button>
        </form>
      </div>
      <div className='flex flex-col gap-5 text-white py-24 w-2/5 px-16 lg:px-32 bg-gradient-to-t from-emerald-500 from-30% to-teal-700 h-screen'>
        <p className='text-4xl lg:text-5xl'>Welcome back to pvpark!</p>
        <p className='text-2xl'>Sign in to gain access.</p>
      </div>
    </div>
  )
}
