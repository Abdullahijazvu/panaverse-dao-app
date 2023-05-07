'use client'

import Wrapper from '@/components/shared/Wrapper'
import QuarterBox from '@/components/shared/QuarterBox'
import Web3Img from '@/assets/images/metaverse.png'
import AiImg from '@/assets/images/AI.png'
import Image from 'next/image'
import { useState } from 'react'

export const programsData = [
    {
        slug: "wmd",
        header:"Web 3.0 (Blockchain) and Metaverse Specialization",
        description:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences.",
        image: Web3Img,
        quarters: [
            {
                header: "Quarter IV",
                description:"W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
                number: 4
            },
            {
                header: "Quarter V",
                description:"AC-897: Metaverse specialization with voice Assistants and Matter Devices.",
                number: 5
            }
        ]
    },
    {
        slug: "ai",
        header:"AI and Metaverse Specialization",
        description:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences.",
        image: AiImg,
        quarters: [
            {
                header: "Quarter IV",
                description:"AC-531: Ambient Computing with voice Assistants and Matter Devices.",
                number: 4
            },
            {
                header: "Quarter V",
                description:"AC-897: Metaverse specialization with voice Assistants and Matter Devices.",
                number: 5
            }
        ]
    },
    {
        slug: "ai",
        header:"AI and Metaverse Specialization",
        description:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences.",
        image: AiImg,
        quarters: [
            {
                header: "Quarter IV",
                description:"AC-531: Ambient Computing with voice Assistants and Matter Devices.",
                number: 4
            },
            {
                header: "Quarter V",
                description:"AC-897: Metaverse specialization with voice Assistants and Matter Devices.",
                number: 5
            }
        ]
    },
    {
        slug: "ai",
        header:"AI and Metaverse Specialization",
        description:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences.",
        image: AiImg,
        quarters: [
            {
                header: "Quarter IV",
                description:"AC-531: Ambient Computing with voice Assistants and Matter Devices.",
                number: 4
            },
            {
                header: "Quarter V",
                description:"AC-897: Metaverse specialization with voice Assistants and Matter Devices.",
                number: 5
            }
        ]
    },
    {
        slug: "ai",
        header:"AI and Metaverse Specialization",
        description:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences.",
        image: AiImg,
        quarters: [
            {
                header: "Quarter IV",
                description:"AC-531: Ambient Computing with voice Assistants and Matter Devices.",
                number: 4
            },
            {
                header: "Quarter V",
                description:"AC-897: Metaverse specialization with voice Assistants and Matter Devices.",
                number: 5
            }
        ]
    },
    {
        slug: "ai",
        header:"AI and Metaverse Specialization",
        description:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences.",
        image: AiImg,
        quarters: [
            {
                header: "Quarter IV",
                description:"AC-531: Ambient Computing with voice Assistants and Matter Devices.",
                number: 4
            },
            {
                header: "Quarter V",
                description:"AC-897: Metaverse specialization with voice Assistants and Matter Devices.",
                number: 5
            }
        ]
    },
    {
        slug: "ai",
        header:"AI and Metaverse Specialization",
        description:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences.",
        image: AiImg,
        quarters: [
            {
                header: "Quarter IV",
                description:"AC-531: Ambient Computing with voice Assistants and Matter Devices.",
                number: 4
            },
            {
                header: "Quarter V",
                description:"AC-897: Metaverse specialization with voice Assistants and Matter Devices.",
                number: 5
            }
        ]
    }
]

const SpecializedTracks = () => {

    const [selectedItem, setSelectedItem] = useState("wmd")

    const selectedItemData = programsData.find((item) => item.slug === selectedItem)
    
    return (
    <section>
        <Wrapper>
            <div className='px-5 2xl:px-0'>
                <h2 className='text-3xl lg:text-6xl font-bold'>Specialized Tracks:</h2>
                <p className='mt-2 text-xl text-slate-600 max-w-screen-sm'>After completing the first three quarters the participants will select<br/>one or more specializations consisting of two courses each: </p>
            </div>
            <div className='mt-10 flex flex-col-reverse gap-x-6 gap-y-8 lg:flex-row px-5 2xl:px-0'>
                <div className='shadow-xl sticky top-28 self-start basis-8/12 rounded-xl border border-slate-200 py-8 px-8'>
                    <h4 className='text-lg text-primary font-medium'>Specialized Program</h4>
                    <h3 className='text-xl font-bold'>{selectedItemData?.header}</h3>
                    <p className='text-lg text-slate-600 mt-2'>{selectedItemData?.description}</p>
                    <button className='text-teal-700 text-xl mt-4 underline flex gap-x-2 items-end'>Learn More
                    <svg className='mb-1.5 text-lg' width="10" height="13" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2"/>
                    </svg>
                    </button>
                    <div className='flex flex-col sm:flex-row gap-4 mt-8'>
                        {
                            selectedItemData?.quarters.map((item)=>
                                (
                                <QuarterBox 
                                    key={item.number}
                                    header={item.header}
                                    description={item.description}
                                    number={item.number}
                                    haveBorder={false}/>
                                )
                            )
                        }
                    </div>
                </div>
                <div className='px-4 py-6 space-y-4 basis-4/12 bg-slate-100 flex-1'>
                    {
                        programsData.map((item, i)=>(
                        <div onClick={()=> setSelectedItem(item.slug)} key={item.slug} className='flex gap-x-4 items-center cursor-pointer'>
                            <div className='flex-shrink-0 h-24 w-36'>
                                {/* <div className='w-20 h-16 rounded bg-red-300'> */}
                                    <Image src={item.image} alt={item.header} className={"h-24 object-cover rounded-md"}/>
                                {/* </div> */}
                            </div>
                            <div> 
                                <h4 className='text-primary font-medium'>Specialized Program</h4>
                                <h3 className='text-xl font-semibold'>{item.header}</h3>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </Wrapper>
    </section>
  )
}

export default SpecializedTracks