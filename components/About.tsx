import Image from "next/image"
import aboutImage from "@/public/images/about.jpg"
export default function About(){
    return <div className="grid grid-cols-12">
        <div className="hidden md:block col-start-2 col-span-4 h-full relative"><Image src={aboutImage} alt="about-page-image" fill className="object-cover" /></div>
        <div className="sm:col-start-2 md:col-start-6 col-span-12 md:col-span-6 pl-7 pr-5 w-full h-full flex flex-col justify-center">
            <p className="text-sm font-semibold tracking-widest text-green-500 uppercase mb-6">welcome to digilab</p>
            <p className="text-2xl md:text-4xl font-semibold text-slate-900 capitalize mb-8">we are digital agency</p>
            <div className="flex flex-col gap-5 text-gray-400 tracking-wide"><p>We are a passionate team of digital experts dedicated to transforming businesses through innovative technology, creative design, and data-driven strategies that deliver real results.</p>
                <p>Over the years we have partnered with startups, growing businesses, and established enterprises to build powerful digital products that drive engagement, increase revenue, and create lasting impact.</p>
                <p>From web development and UI/UX design to digital marketing and business strategy, we offer end-to-end solutions tailored specifically to your unique business goals and vision.</p></div>
        <div className="flex flex-col w-fit md:flex-row-reverse bg-green-400 text-black p-5 sm:p-9 sm:w-80 md:w-95 md:-translate-x-30 my-10">
            <div className="flex flex-col gap-1">
                <span className="text-xl sm:text-2xl md:text-3xl">20</span>
                <span className="text-md sm:text-lg md:texl-xl uppercase font-light">years of experience</span>
            </div>
        </div>
        </div>
    </div>
}