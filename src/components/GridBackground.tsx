import type { ReactNode } from "react"


export const GridBackground = ({children}:{children:ReactNode}) => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#071424] to-[#0c1b36] overflow-hidden">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'moveGrid 15s linear infinite',
        }}
      />
      {children}
      <style>{`
        @keyframes moveGrid {
          from { background-position: 0 0, 0 0; }
          to { background-position: 40px 40px, 40px 40px; }
        }
      `}</style>
    </div>
  )
}