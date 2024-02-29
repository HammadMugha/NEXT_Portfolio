import React from 'react'
import CustomButton from './CustomButton'

function HeaderThree() {
  return (
    <section className='HeaderThree bg-[url("/banner.jpg")] bg-center bg-cover bg-no-repeat py-[80px] relative'>
        <div className="container mx-auto">
            <div className="content_box flex items-center text-center justify-center flex-col gap-5 z-10">
              <h3 className='text-white z-10 text-2xl'>I Am Available For Freelancer Projects.</h3>
              <p className='text-white z-10 text-sm font-light'>Obviously I'm a Web Designer. Web Developer with over 7 years of experience. <br /> Experienced with all stages of the development.</p>
              <CustomButton title={"Hire Me"} variant={"bg-primary text-white px-7 py-2 z-10"}/>
            </div>
        </div>
        <div class="absolute inset-0 bg-slate-900/70"></div>
    </section>
  )
}

export default HeaderThree