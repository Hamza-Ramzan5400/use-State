"use client"
import { useState } from "react"


function State() {
    const [count , setCount] = useState(0)
  return (

    <div className=" flex flex-wrap md:flex-col lg:flex-col justify-center items-center  bg-black h-screen w-full">

       <div className="flex-col flex justify-center items-center bg- gap-4">
       <p className="md:text-lg lg:text-2xl  text-slate-50 mt-4 "> My count is: {count} </p>
        <button onClick={() => setCount (count + 1 )} className=" bg-red-600 px-10 py-3 rounded-lg text-slate-100 shadow-lg font-bold ml-10 ">Add Cart</button>
        <button onClick={() => setCount(count -1)} className="bg-pink-800 px-8 py-3 text-white rounded-lg font-bold ml-6">Decrement</button>
        <button onClick={() => setCount(0)} className=" bg-orange-600 px-8 py-3 text-white rounded-lg font-bold ml-6"> Reset button </button>
       </div>
    </div>
  )
}

export default State