import { headerTwo } from '@/data'
import React from 'react'
import { BiRightArrow } from 'react-icons/bi'

function HeaderTwo() {
  return (
    <section className='py-[60px] bg-[#F9FAFB]'>
      <div className='container mx-auto max-w-6xl'>
        <div className="heading text-center pb-10">
          <h2 className='text-2xl font-semibold mb-4 text-fontColor'>What do i offer?</h2>
          <p className='text-sm text-global'>Obviously I'm a Web Designer. Web Developer with over 7 years of<br /> experience. Experienced with all stages of the development.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {headerTwo.map((item,i)=>(
            <div className="col py-[40px] px-[20px] flex flex-col gap-3 rounded-md shadow-lg bg-white" key={i}>
                <span className='text-primary text-4xl'>{item.icon}</span>
                <h2 className='text-1xl font-semibold text-fontColor'>{item.title}</h2>
                <p className='text-sm text-global'>{item.desc}</p>
                <h5 className='flex items-center gap-4'>Read more <BiRightArrow /></h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeaderTwo