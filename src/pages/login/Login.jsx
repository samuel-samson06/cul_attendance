import React from "react"
import image from "../../images/signin.svg"

function Login() {
  return (
    <React.Fragment>
      <div className=" flex flex-col h-screen items-center gap-3  bg-gray-100">
        <header>
          <img src={image} alt="" className=" sm:w-56 md:w-64 lg:w-64 w-48" />
        </header>
        <form action="" className=" gap-5 flex flex-col ">
          <label htmlFor="">
            <input type="text" placeholder="Username" className=" placeholder:font-bold py-2 rounded-lg  px-4 outline-none md:w-72 lg:w-80"/>
          </label>
          <label htmlFor="">
            <input type="email" placeholder="Email" className=" placeholder:font-bold py-2 rounded-lg  px-4 outline-none md:w-72 lg:w-80" />
          </label>
          <label htmlFor="">
            <input type="password" placeholder="Password" className=" placeholder:font-bold py-2 rounded-lg  px-4 outline-none md:w-72 lg:w-80"/>
          </label>
          <button className=" bg-black  text-white  py-2 rounded-md md:w-72 lg:w-80">
            Login
          </button>
        </form>
      </div>
    </React.Fragment>
  )
}

export default Login