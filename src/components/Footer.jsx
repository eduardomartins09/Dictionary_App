import Image from "next/image"
import Link from "next/link"

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { FaBook } from 'react-icons/fa'
import { SiGoogletranslate } from 'react-icons/si'
import { BsPersonVcardFill } from 'react-icons/bs'

import { footerLinks } from "../constants"

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 border-t-4 border-gray-700'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 px-12 py-8'>
        <div className='flex flex-col justify-start items-start gap-4'>
          <div className='flex items-center gap-4'>
            <Link href="/" className='flex items-center gap-2 bg-gray-700 p-2 rounded-lg mb-4 sm:mb-0 hover:bg-blue-950'>
              <span className='text-green-500'>
                <FaBook size={25} />
              </span>
              <span className='text-xl font-bold'>Home Dictionary</span>
            </Link>             
            <Link href="/translation?languageFrom=&languageTo=" className='flex items-center gap-2 bg-gray-700 p-2 rounded-lg mb-4 sm:mb-0 hover:bg-blue-950'>
              <span className='text-green-500'>
                <SiGoogletranslate size={25} />
              </span>
              <span className='text-xl font-bold'>Translate Text</span>
            </Link>             
          </div> 
          <div className="flex justify-center gap-4 mb-6">
            <a 
              href="https://github.com/eduardomartins09" 
              target="_blank"
              className='bg-gray-700 p-2 rounded-lg'
            >
              <span className='text-white'>
                <AiFillGithub size={20} />
              </span>              
            </a>    
            <a 
              href="https://www.linkedin.com/in/eduardo-martins-santos/" 
              target="_blank"
              className='bg-gray-700 p-2 rounded-lg'
            >
              <span className='text-white'>
                <AiFillLinkedin size={20} />
              </span>              
            </a>    
            <a 
              href="https://eduardomartins09.github.io/Meu_Portifolio/" 
              target="_blank"
              className='bg-gray-700 p-2 rounded-lg'
            >
              <span className='text-white'>
                <BsPersonVcardFill size={20} />
              </span>              
            </a> 
          </div>
          <div>
            <p className="text-center text-lg">Copyright © 2023 <a href="https://eduardomartins09.github.io/Meu_Portifolio/" target="_blank" className="underline underline-offset-1">EduardoMartins09</a> • All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((item) => (
            <div key={item.title} className="flex flex-col gap-6 text-base min-w-[170px]">
              <h3 className="font-bold">{item.title}</h3>
              <div className="flex flex-col gap-5">
                {item.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className="text-gray-500"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between items-center flex-wrap mt-10 border-t-4 border-gray-700 px-12 py-8'>
        <p className="text-center text-lg">Copyright © 2023 <a href="https://eduardomartins09.github.io/Meu_Portifolio/" target="_blank" className="underline underline-offset-1">EduardoMartins09</a> • All Rights Reserved.</p>
        <div>
          <Link href="/" className="text-gray-500">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer