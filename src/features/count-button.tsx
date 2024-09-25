import { useReducer } from "react"

export const CountButton = () => {
  const [count, increase] = useReducer((c) => c + 1, 0)

  return (
    <button
      onClick={() => increase()}
      type="button"
      className="p-flex p-flex-row p-items-center p-px-4 p-py-2 p-text-sm p-rounded-lg p-transition-all p-border-none
      p-shadow-lg hover:p-shadow-md
      active:p-scale-105 p-bg-slate-50 hover:p-bg-slate-100 p-text-slate-800 hover:p-text-slate-900">
      Count:
      <span className="p-inline-flex p-items-center p-justify-center p-w-8 p-h-4 p-ml-2 p-text-xs p-font-semibold p-rounded-full">
        {count}
      </span>
    </button>
  )
}
