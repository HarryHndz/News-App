import { ArrowRight,Newspaper } from "lucide-react"

export const New = ()=>{
  return(
    <div className="group flex flex-row items-center gap-2 bg-slate-700 p-4 rounded-lg border border-slate-600 py-2 my-2 cursor-pointer hover:bg-slate-600 transition-all duration-300 ease-in-out">
      <Newspaper className="w-10 h-10 text-slate-400 group-hover:text-indigo-400 transition-all duration-300 ease-in-out" />
      <div className="flex flex-col">
        <h3 className="text-slate-100 font-bold mb-2">News 24/10/2025</h3>
        <p className="text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </div>
      <button className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-all duration-300 ease-in-out cursor-pointer invisible group-hover:visible">
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  )
}


