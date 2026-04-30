import React, { useContext, useEffect,useState } from 'react'
import Recipescontext, { recipescontext } from '../context/Recipescontext';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Singlerecipes = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipescontext);
  const [favdata,setfavdata] = useState(JSON.parse(localStorage.getItem("Fav")) || []);
  const parmas = useParams();
  const recipe = data.find((recipes) => parmas.id == recipes.id);

  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      title: recipe?.title,
      descrption: recipe?.descrption,
      image: recipe?.image,
      instruction: recipe?.instruction,
      category: recipe?.category
    },
  });


  if (!recipe) {
    return (
      <div className="mt-20 text-center text-zinc-600 text-lg">
        page not found
      </div>
    )
  }

  

  const Delethandler = () => {
    const datad = data.filter((r) => r.id !== parmas.id)
    setdata(datad);
    localStorage.setItem("recipe", JSON.stringify(datad));
    toast.success("Deleted Sucessfully!");
    navigate("/recipes");
  }

  const sumbitHandler = (formdata) => {
    const index = data.findIndex((e) => parmas.id == e.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...formdata }
    setdata(copydata);
    localStorage.setItem("recipe", JSON.stringify(copydata));
    toast.success("Updated Succesfully!")
  }
  
  

  const FavHandler = () =>{
    const copydata = [...favdata]
    copydata.push(recipe)
    setfavdata(copydata)
      localStorage.setItem("Fav" ,JSON.stringify(copydata) );
      useNavigate("/fav")
  }

  const unfavhandler = () =>{
      const fliterfav = favdata.filter((e) => e.id != recipe?.id)
      setfavdata(fliterfav)
      localStorage.setItem("Fav" ,JSON.stringify(fliterfav))
  }
  
  


  return (
    <div className="min-h-screen bg-black flex flex-col items-center px-4 py-10 mt-10">

      {/* TOP DISPLAY SECTION */}
      <div className="w-full max-w-2xl mb-6 relative">

        {/* ❤️ HEART ICON */}
        <div className="absolute top-4 right-10 z-10">
          
          

  <div className="relative w-fit">
  {favdata.find((e) => e.id == recipe?.id) ? (
    <i
      onClick={unfavhandler}
      className="ri-heart-fill text-2xl text-red-600 absolute top-0 left-0 cursor-pointer"
    ></i>
  ) : (
    <i
      onClick={FavHandler}
      className="ri-heart-line text-2xl text-red-600 absolute top-0 left-0 cursor-pointer"
    ></i>
  )}
</div>
  

        </div>

        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-2xl shadow-2xl border border-zinc-800"
        />

        <h1 className="text-3xl font-bold text-white mt-4">
          {recipe.title}
        </h1>

        <p className="text-zinc-600 mt-1">
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

export default Singlerecipes;