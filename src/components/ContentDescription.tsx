import type { ReactNode } from 'react'

interface ContentDescriptionProps {
  description: string
  icon?: ReactNode
  description2?: ReactNode
}


export const ContentDescription = ({description, description2, icon }: ContentDescriptionProps)=>{
  return(
    <div className="h-full h-80 flex items-center justify-center">
      <div className="text-center max-w-md">
        {icon && (
          <div className="bg-indigo-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-indigo-700">
            {icon}
          </div>
        )}
        <p className="text-slate-300 mb-4">
          {description}
        </p>
        {description2}
      </div>
    </div>
  )
}