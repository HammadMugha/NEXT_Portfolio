import { headerFour } from '@/data'
import React from 'react'
import { BiRightArrow } from 'react-icons/bi'
function HeaderFour() {
  return (
    <section className='py-[60px]'>
      <div className='container mx-auto max-w-6xl'>
        <div className="heading text-center pb-10">
          <h2 className='text-2xl font-semibold mb-4 text-fontColor'>What do i offer?</h2>
          <p className='text-sm text-global'>Obviously I'm a Web Designer. Web Developer with over 7 years of<br /> experience. Experienced with all stages of the development.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {headerFour.map((item,i)=>(
            <div className="col rounded-md flex flex-col gap-3 rounded-md shadow-lg bg-white" key={i}>
                <img src={item.img} className='rounded-tl-[12px] rounded-tr-[12px]'/>
                <div className="content py-[30px] px-[30px]">
                <h2 className='text-1xl font-semibold text-fontColor'>{item.title}</h2>
                <p className='text-sm text-global'>{item.desc}</p>
                <h5 className='flex items-center gap-4'>Read more <BiRightArrow /></h5>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeaderFour