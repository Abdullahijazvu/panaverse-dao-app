import Logo from "/public/logo.png"
import Image from "next/image"
import Link from "next/link"
import Wrapper from "@/components/shared/Wrapper"
import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white">
    <Wrapper>
        <div className='flex justify-between py-4 items-center px-5 2xl:px-0'>
        <div>
        <Image src={Logo} alt="Panaverse Dao Logo" />
        </div>
        <ul className='flex space-x-4 font-medium'>
            <li>
                <Link href={"/"}>Home</Link>
            </li>
            <li>
                <Link href={"/courses"}>Courses</Link>
            </li>
        </ul>
        </div>
    </Wrapper>
    </header>
  )
}

export default Header