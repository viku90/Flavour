import React, { useContext } from 'react'
import Recipescontext, { recipescontext } from '../context/Recipescontext';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { div } from 'framer-motion/client';

const Singlerecipes = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipescontext);
  const parmas = useParams();
  const recipe = data.find((recipes) => parmas.id == recipes.id);

  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      title: recipe.title,
      descrption: recipe.descrption,
      image: recipe.image,
      instruction: recipe.instruction,
      category: recipe.category
    },
  });

  console.log(recipe)

  if (!recipe) {
    return (
      <div className="mt-20 text-center text-zinc-400 text-lg">
        page not found
      </div>
    )
  }

  const Delethandler = () => {
    const datad = data.filter((r) => r.id !== parmas.id)
    setdata(datad);
    toast.success("Deleted Sucessfully!");
    navigate("/recipes");
  }

  const sumbitHandler = (formdata) => {
    const index = data.findIndex((e) => parmas.id == e.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...formdata }
    setdata(copydata);
    toast.success("Updated Succesfully!")
  }

 return (
  <div className="min-h-screen bg-black flex flex-col items-center px-4 py-10 mt-10">

    {/* TOP DISPLAY SECTION (TITLE + IMAGE) */}
    <div className="w-full max-w-2xl mb-6">

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-2xl shadow-2xl border border-zinc-800"
      />

      <h1 className="text-3xl font-bold text-white mt-4">
        {recipe.title}
      </h1>

      <p className="text-zinc-400 mt-1">
        {recipe.descrption}
      </p>

    </div>

    {/* FORM SECTION */}
    <form
      onSubmit={handleSubmit(sumbitHandler)}
      className="w-full max-w-2xl bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 
      shadow-2xl rounded-2xl p-6 flex flex-col gap-4"
    >

      <h1 className="text-2xl font-semibold text-white text-center mb-2">
        Edit Recipe
      </h1>

      <input
        {...register("image")}
        type="url"
        placeholder="Image URL"
        className="bg-zinc-800 text-white p-3 rounded-xl border border-zinc-700
        focus:ring-2 focus:ring-orange-500 outline-none"
      />

      <input
        {...register("title")}
        type="text"
        placeholder="Enter the title"
        className="bg-zinc-800 text-white p-3 rounded-xl border border-zinc-700
        focus:ring-2 focus:ring-orange-500 outline-none"
      />

      <textarea
        {...register("descrption")}
        placeholder="Description"
        className="bg-zinc-800 text-white p-3 rounded-xl border border-zinc-700
        focus:ring-2 focus:ring-orange-500 outline-none"
      />

      <textarea
        {...register("instruction")}
        placeholder="Write instruction separated by comma"
        className="bg-zinc-800 text-white p-3 rounded-xl border border-zinc-700
        focus:ring-2 focus:ring-orange-500 outline-none"
      />

      <select
        {...register("category")}
        className="bg-zinc-800 text-white p-3 rounded-xl border border-zinc-700
        focus:ring-2 focus:ring-orange-500 outline-none"
      >
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="supper">Supper</option>
        <option value="dinner">Dinner</option>
      </select>

      {/* BUTTONS */}
      <div className="flex gap-4 mt-2">

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
        >
          Update
        </button>

        <button
          onClick={Delethandler}
          type="button"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition"
        >
          Delete
        </button>

      </div>

    </form>
  </div>
);
}

export default Singlerecipes