import { Sparkles } from 'lucide-react'

export const ContentDescription = ()=>{
  return(
    <div className="h-full h-80 flex items-center justify-center">
      <div className="text-center max-w-md">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Sparkles className="text-blue-600" size={32} />
        </div>
        <h2 className="text-2xl font-bold text-slate-50 mb-2">
          Welcome!
        </h2>
        <p className="text-slate-300 mb-4">
          Send the URL of any news and I will help you verify if it is reliable or not.
        </p>
        <div className="bg-gray-400 rounded-lg p-4 text-left text-sm text-slate-700">
          <p className="font-semibold mb-2">Examples:</p>
          <ul className="space-y-1 text-slate-600">
            <li>• https://bbc.com/news/article</li>
            <li>• https://reuters.com/world/story</li>
            <li>• https://fakenews.com/clickbait</li>
          </ul>
        </div>
      </div>
    </div>
  )
}