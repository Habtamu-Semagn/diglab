import Image from "next/image"
import aboutImage from "@/public/images/about.jpg"
export default function About(){
    return <div className="grid grid-cols-12">
        <div className="hidden md:block col-start-2 col-span-4 h-full relative"><Image src={aboutImage} alt="about-page-image" fill className="object-cover" /></div>
        <div className="sm:col-start-2 md:col-start-6 col-span-12 md:col-span-6 pl-7 pr-5 w-full h-full flex flex-col justify-center">
            <p className="text-sm font-semibold tracking-widest text-green-500 uppercase mb-6">welcome to digilab</p>
            <p className="text-2xl md:text-4xl font-semibold text-slate-900 capitalize mb-8">we are digital agency</p>
            <div className="flex flex-col gap-5 text-gray-400 tracking-wide"><p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p></div>
        <div className="flex flex-col w-fit md:flex-row-reverse bg-green-400 text-black p-5 sm:p-9 sm:w-80 md:w-95 md:-translate-x-30 my-10">
            <div className="flex flex-col gap-1">
                <span className="text-xl sm:text-2xl md:text-3xl">20</span>
                <span className="text-md sm:text-lg md:texl-xl uppercase font-light">years of experience</span>
            </div>
        </div>
        </div>
    </div>
}