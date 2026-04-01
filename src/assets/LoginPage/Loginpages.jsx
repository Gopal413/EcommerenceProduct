import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Loginpages() {

    const navigate = useNavigate();
    const [token,settoken] =useState(0)
    const [forminp,setforminp] =useState({
        username:"",
        password:""
    })

    const Handleinput =(e)=>{
        setforminp({...forminp,[e.target.name]:e.target.value})
    }

    const Handleform =(e)=>{
        e.preventDefault()
        console.log("password",forminp.password)
        const token = "";
       if(forminp.username === "gopal@admin.com" && forminp.password === "gopal@123")
        {
            console.log("welcome to Gopal in Admin page  ")
            //token = localStorage.setItem("token_id","1");
            settoken("1")
            navigate("/")
        } 
        else if (forminp.username === "prime@gmail.com" && forminp.password === "prime123" ){
            console.log("welcome to Prime page")
            //token =localStorage.setItem("token_id","2");
            settoken("2")
             navigate("/")
        }
        else if(forminp.username === "user@gmail.com" && forminp.password === "user123"){
            console.log("welcome to User Pages")
            //token =localStorage.setItem("token_id","3");
            settoken("3")
             navigate("/")
        }
        else{
            console.log("invalid Username and password")
             navigate("/login")
        }
        const obj ={
            username:"",
            password:""
        }
       setforminp(obj)
        }

        localStorage.setItem("token_id",token)
        console.log("login pages")
    console.log("username",forminp.username)

  return (
    // <div>
    //     <h1>Login Pages</h1>
    //     <form onSubmit={Handleform}>
    //         <label htmlFor="username">UserName :</label>
    //         <input type="email" value={forminp.username} onChange={Handleinput} name="username"/><br />
    //         <label htmlFor="password">Password :</label>
    //         <input type="password" value={forminp.password} onChange={Handleinput} name="password" /><br />
    //         <button type='submit'>Submit</button>
    //     </form>
      
    // </div>

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 px-4">
      {/* Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8">
        {/* Logo / title */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xl shadow-lg">
            AJ
          </div>
          <h1 className="mt-4 text-2xl font-semibold text-white">
            Welcome back
          </h1>
          <p className="mt-1 text-sm text-slate-300">
            Sign in to continue to your dashboard
          </p>
        </div>

        {/* Form */}
        <form onSubmit={Handleform} className="space-y-5">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-slate-200 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="username"
              name="username"
              value={forminp.username}
              onChange={Handleinput}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-200 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={forminp.password}
              onChange={Handleinput}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex items-center justify-between text-xs text-slate-300">
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-white/20 bg-transparent text-blue-500 focus:ring-blue-500"
              />
              Remember me
            </label>
            <button
              type="button"
              className="text-blue-300 hover:text-blue-200 underline underline-offset-2"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:from-blue-600 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-400 transition active:scale-[0.98]"
          >
            Sign in
          </button>
        </form>

        {/* Footer text */}
        <p className="mt-6 text-center text-xs text-slate-400">
          Don&apos;t have an account?{" "}
          <span className="text-blue-300 hover:text-blue-200 cursor-pointer">
            Create one
          </span>
        </p>
      </div>
    </div>

  )
}

export default Loginpages
