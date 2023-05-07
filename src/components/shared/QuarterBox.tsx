import { FC } from "react"

interface IProps {
    header: string;
    description: string;
    number: number;
    haveBorder?: boolean
}

const QuarterBox:FC<IProps> = ({header, description, number, haveBorder=true}) => {

  return (
    <div className={`border rounded-md flex-1 px-8 py-14 relative flex flex-col justify-center ${haveBorder && "border"}`}>
        <h4 className='font-bold text-lg'>{header}</h4>
        <p className='z-0 mt-2 text-slate-600'>{description}</p>
        <span className='absolute -top-8 right-10 text-[170px]  font-bold -z-10 text-gray-200'>{number}</span>
    </div>
  )
}

export default QuarterBox