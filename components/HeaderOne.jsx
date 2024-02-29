import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'
import Card from './Card'

function HeaderOne() {
  return (
    <section className='pt-[60px]'>
      <div className='container mx-auto max-w-6xl'>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-[40px] items-center">
            <div className="col-span-2 relative p-8">
            <Image src={"/ab2.jpg"} alt='img'
                width={0} height={0}
                sizes="100vw" className='rounded-full'
                style={{"width": "100%","height": "auto"}}
                />
              <Card varient={"absolute bottom-[80px] -right-4"} title={"180+"}/>
              <Card varient={"absolute top-[250px] -left-4"} title={"250+"}/>
            </div>
            <div className="col-span-3 flex flex-col items-start gap-4">
              <h2 className='text-2xl text-fontColor font-semibold'>I'm a Passionate Web Designer</h2>
              <p className='text-global text-sm'>Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development cycle for dynamic web projects. The as opposed to using 'Content here, content here', making it look like readable English. <br /><br />I'm a professional web designer. My motive is to build a best web design with my all years of experience.</p>
              <CustomButton variant={"bg-lightOrange text-primary px-7 py-2"} title={"See Work"}/>
            </div>
          </div>
      </div>
    </section>

  )
}

export default HeaderOne