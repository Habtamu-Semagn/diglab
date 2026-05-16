import Image from "next/image"
import aboutImage from "@/public/images/about.jpg"
export default function About(){
    return <div className="grid grid-cols-12">
        <div className="col-start-2 col-span-4"><Image src={aboutImage} alt="about-page-image" /></div>
        <div className="col-start-6 col-span-6 pl-15 w-full h-full flex flex-col justify-center">
            <p className="text-sm font-semibold tracking-widest text-green-500 uppercase mb-6">welcome to digilab</p>
            <p className="text-2xl md:text-4xl font-semibold text-slate-900 capitalize mb-8">we are digital agency</p>
            <div className="flex flex-col gap-5 text-gray-400 tracking-wide"><p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p></div>
        <div className="flex flex-col bg-green-400 text-black p-9 w-110 -translate-x-40 mt-10">
            <span className="text-xl">20</span>
            <span className="text-xl uppercase">years of experience</span>
        </div>
        </div>
    </div>
}