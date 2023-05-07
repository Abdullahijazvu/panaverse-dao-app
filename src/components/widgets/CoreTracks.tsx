import Wrapper from '@/components/shared/Wrapper'
import Button from '@/components/shared/Button'
import QuarterBox from '@/components/shared/QuarterBox'

const CoreTrackData = [
    {
        header: "Quarter I",
        description: "CS-101: Object-Oriented Programming using TypeScript",
        number: 1
    },
    {
        header: "Quarter II",
        description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 2
    },
    {
        header: "Quarter III",
        description: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
        number: 3
    }
]

const Coretracks = () => {
  return (
    <section>
        <Wrapper>
            <div className='max-w-screen-md px-5 2xl:px-0 mt-12 mb-12'>
                <h4 className='text-teal-700 font-semibold text-lg mt-4'>Program of Studies</h4>
                <h2 className='text-3xl lg:text-6xl font-bold'>Core Courses<br/>(Common in All Specializations):</h2>
                <p className='mt-3 text-xl text-slate-600'>Every participant of the program will start by completing the following three core courses:</p>
                <div className='mt-5'>
                    <Button text={"Learn More"}/>
                </div>
            </div>
            <div className='my-20 flex flex-col md:flex-row gap-x-8 gap-y-6 px-5 2xl:px-0'>
                {
                    CoreTrackData.map((item, i)=> (
                            <QuarterBox
                            key={item.number}
                            header={item.header}
                            description={item.description}
                            number={i + 1}/>
                    ))
                }
            </div>
        </Wrapper>
    </section>
  )
}

export default Coretracks