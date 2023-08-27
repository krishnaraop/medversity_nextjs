"use client"
import React from "react";
// import { useRouter } from "next/router"
import { useRouter } from 'next/navigation'
 
export default function LoginForm() {
  const router = useRouter()
  const submit =()=>{
    router.push('/dashboard')
  }

  return (
    <>
      <form action="" method="post">
        <div className="container d-flex flex-column gap-3">
          <div>
          <label for="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            className="form-control"
            required
          />
          </div>
          <div>
          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            className="form-control"
            required
          />
          </div>
         
          <button type="submit" className="btn btn-primary" onClick={submit}>Login</button>       
        </div>
      </form>
    </>
  );
}
