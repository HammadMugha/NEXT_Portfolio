import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'
import Card from './Card'


function Header() {
  return (
    <div className='container mx-auto max-w-6xl'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-center">
            <div className="col flex flex-col items-center lg:items-start gap-4 lg:text-left text-center">
                <h2 className='text-[46px] leading-[55px] font-bold text-fontColor'>Hey! I'm <br /><span className='text-primary'>Web Developer</span></h2>
                <p>Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
                <div className="flex items-center gap-3">
                 <CustomButton title="Hire Me" variant={"bg-primary text-white py-2 px-7"}/>
                 <CustomButton title="Download CV" variant={"bg-lightOrange text-primary py-2 px-7"}/>
                </div>
            </div>
            <div className="col bg-primary rounded-[50%] relative
            ">
                <Image src={"/2.png"} alt='img'
                width={0} height={0}
                sizes="100vw"
                style={{"width": "100%","height": "auto"}}
                />
                <Card varient={"absolute top-[250px] -left-4"} title={"250+"}/>
                <Card varient={"absolute top-[320px] -right-4"} title={"180+"}/>
            </div>
        </div>
    </div>

  )
}

export default Header