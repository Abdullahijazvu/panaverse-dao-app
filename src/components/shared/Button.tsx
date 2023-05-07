import { FC } from "react"

const Button:FC<{text: string}> = ({text}) => {
  return (
    <button className="bg-teal-500 text-white font-medium hover:shadow-lg lg:py-4 lg:px-8 py-2 px-4 text-sm rounded-full hover:scale-105 duration-300">{text}</button>
  )
}

export default Button