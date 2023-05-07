import Wrapper from "@/components/shared/Wrapper"
import Image from "next/image"
import HeroPoster from "@/assets/images/hero-poster.png"
import Button from "@/components/shared/Button"
import Para from "@/components/Para"

const Hero = () => {
  return (
    <section>
        <Wrapper>
            <div className="flex flex-col md:flex-row items-center px-5 2xl:px-0 mt-6 mb-12">
                <div className="flex-1">
                <h4 className="text-teal-800 font-semibold text-lg">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
                <h1 className="text-3xl lg:text-6xl font-bold">Certified Web 3.0 and Metaverse Developer</h1>
                <Para text={"A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet"}/>
                <Para text={"Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies"}/>
                <div className="mt-6">
                <Button text={"Learn More"}/>
                </div>
                </div>
                <div className="flex-1">
                    <Image src={HeroPoster} alt="Hero Poster"/>
                </div>
            </div>
        </Wrapper>
    </section>
  )
}

export default Hero