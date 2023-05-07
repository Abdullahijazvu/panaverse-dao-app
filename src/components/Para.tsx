import { FC } from "react"

const Para:FC<{text: string}> = ({text}) => {
  return (
    <div className="text-sm mt-2 lg:text-xl text-slate-600">{text}</div>
  )
}

export default Para