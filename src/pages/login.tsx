import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../utils/firebaseConfig'
import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router'

export default function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      setError(null)
      setIsLoading(true)
      const formData = new FormData(event.currentTarget)
      const username = (formData.get('username') as string) ?? ''
      const password = (formData.get('password') as string) ?? ''
      if (!username || !password) {
        setError('Por favor completa ambos campos.')
        return
      }
      await signInWithEmailAndPassword(auth, username, password)
      navigate('/landing')
    } catch (err: unknown) {
      console.error('Login error:', err)
      const message = err instanceof Error ? err.message : String(err ?? 'Error desconocido')
      setError(message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-8">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-semibold text-white">News Fake App</h1>
          <p className="text-sm text-slate-300 mt-1">Accede a tu cuenta para continuar</p>
        </header>

        <form onSubmit={handleLogin} className="space-y-4">
          {error && (
            <div className="text-sm text-red-300 bg-red-900/30 p-2 rounded">{error}</div>
          )}

          <div>
            <label htmlFor="username" className="block text-sm text-slate-300 mb-1">
              Correo electrónico
            </label>
            <input
              id="username"
              name="username"
              type="email"
              placeholder="tucorreo@ejemplo.com"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-slate-300 mb-1">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg disabled:opacity-60"
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
              ) : (
                'Iniciar sesión'
              )}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm text-slate-300">
          ¿No tienes cuenta?{' '}
          <button onClick={() => navigate('/register')} className="text-blue-300 hover:underline">
            Regístrate
          </button>
        </div>
      </div>
    </main>
  )
}