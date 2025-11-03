
type TConfirmModalProps = {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title?: string
  description?: string
}

export default function ConfirmationModal(
  { isOpen, onClose, onConfirm, title = "Confirmación", description = "¿Estás seguro?" }
  : TConfirmModalProps
) {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-slate-800 text-slate-100 rounded-lg shadow-lg w-full max-w-md p-6 border border-slate-700">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-slate-300 mb-4">{description}</p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-slate-700 hover:bg-slate-600 text-slate-200"
          >
            Cancelar
          </button>
          <button
            onClick={() => { onConfirm(); }}
            className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  )
}
