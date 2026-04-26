import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { recipescontext } from '../context/Recipescontext';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm()

  const {data,setdata}= useContext(recipescontext);
  const navigate =useNavigate();
  const sumbitHandler = (datainfo) =>{
    datainfo.id = nanoid();
    const copydata =[...data] 
    copydata.push(datainfo);
    setdata(copydata);
    toast.success("New Recipe is Created succesfully!")
    reset();
    navigate("/recipes");
  }
  

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center 
    bg-gradient-to-br from-black via-zinc-950 to-zinc-900 px-4">
      
      <form 
        onSubmit={handleSubmit(sumbitHandler)} 
        className="w-[400px] bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 
        shadow-2xl rounded-2xl p-6 flex flex-col gap-4"
      >

        <h1 className="text-2xl font-semibold text-white mb-2 text-center">
          Create Recipe
        </h1>

        <input 
          {...register("image")} 
          type="url" 
          placeholder="Image URL"
          className="bg-zinc-800 text-white placeholder-zinc-400 border border-zinc-700 
          p-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
        />

        <input 
          {...register("title")} 
          type="text" 
          placeholder="Enter the title"
          className="bg-zinc-800 text-white placeholder-zinc-400 border border-zinc-700 
          p-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
        />

        <textarea 
          {...register("descrption")} 
          placeholder="Description"
          className="bg-zinc-800 text-white placeholder-zinc-400 border border-zinc-700 
          p-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
        ></textarea>

        <textarea 
          {...register("instruction")} 
          placeholder="Write instruction separated by comma"
          className="bg-zinc-800 text-white placeholder-zinc-400 border border-zinc-700 
          p-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
        ></textarea>

        <select 
          {...register("category")}
          className="bg-zinc-800 text-white border border-zinc-700 
          p-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>

        <button 
          className="mt-2 py-2 rounded-lg font-medium text-white 
          bg-gradient-to-r from-orange-500 to-red-500 
          hover:opacity-90 active:scale-[0.98] transition-all duration-200"
        >
          Create
        </button>

      </form>
    </div>
  )
}

export default Create