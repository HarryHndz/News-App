import { useState } from "react"
import ConfirmationModal from "./ConfirmationModal"
import {LogOutIcon,ArrowBigDownIcon} from 'lucide-react'
import { useSession } from "../hooks/useSession"

type THeaderProps = {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

export const Header = ({ collapsed, setCollapsed }: THeaderProps) => {
  const { logout, user } = useSession()
  const [open, setOpen] = useState(false)
  const handleConfirm = async () => {
    setOpen(false)
    try {
      await logout()
    } catch (err) {
      console.error(err)
    }
  }
  console.log('User in Header:', user?.token);
  return (
    <>
    {
      collapsed ?
      (
        <ArrowBigDownIcon 
          onClick={()=> setCollapsed(false)} 
          className="absolute top-3 left-5 h-7 w-7 rotate-180 text-indigo-400 cursor-pointer" 
        />
      ) : 
      (
        <div className={'w-full h-1/6 z-40 mb-5 transition-all duration-300 opacity-100'}>
          <header className="w-full h-full flex items-center justify-between bg-slate-800/40 backdrop-blur-sm rounded-xl p-3 border border-slate-700">
            <div className="flex items-center gap-3">
              <ArrowBigDownIcon className={`h-6 w-6 text-indigo-500 cursor-pointer transition-transform ${collapsed ? 'rotate-180' : 'rotate-0'}`} onClick={() => setCollapsed(true)} />
            <div className="bg-indigo-600 rounded-md w-10 h-10 flex items-center justify-center text-white font-bold">
              N
            </div>
            <div>
              <div className="text-slate-100 font-semibold">News Checker</div>
              <div className="text-xs text-slate-300">Verifica la fiabilidad de noticias</div>
            </div>
            </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-slate-100 text-sm font-medium">{user?.email ?? 'Usuario'}</span>
              <span className="text-xs text-slate-300">Activa</span>
            </div>

            <button
              onClick={() => setOpen(true)}
              title="Cerrar sesión"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 cursor-pointer"
            >
              <LogOutIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Cerrar sesión</span>
            </button>
          </div>
          </header>
        </div>
      )
    }
      <ConfirmationModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={handleConfirm}
        title="Cerrar sesión"
        description="¿Deseas cerrar tu sesión? Se te redirigirá al login."
      />
    </>
  )
}

export default Header
