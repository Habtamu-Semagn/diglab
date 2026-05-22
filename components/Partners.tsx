import Image from "next/image"
import { StaticImageData } from "next/image"
import logo1 from "@/public/icons/logo1.png"
import logo2 from "@/public/icons/logo2.png"
import logo3 from "@/public/icons/logo3.png"
import logo4 from "@/public/icons/logo4.png"
import logo5 from "@/public/icons/logo5.png"

const logos: StaticImageData[] = [logo1, logo2, logo3, logo4, logo5]

export default function Partners(){
    return <div className="lg:grid lg:grid-cols-12 pb-20 pt-30 bg-gray-50">
                 <div className="lg:col-start-2 lg:col-span-10 flex flex-col gap-4">

                   {/* Header */}
                   <p className="text-sm font-semibold tracking-widest text-green-500 uppercase self-center">
                     Our partners
                   </p>
                   <h2 className="text-4xl max-w-xl md:text-4xl font-semibold text-gray-900 tracking-wider text-center uppercase self-center">
                     trusted by industry leaders
                   </h2>
                   <div className="flex gap-10 my-20 overflow-hidden items-center justify-center flex-wrap">
                    {
                        logos.map((logo, index) => (
                            <div key={index} className="w-32 h-15 relative flex items-center justify-center">
                                <Image src={logo} alt={`partner logo ${index + 1}`} className="object-contain w-full h-full" />
                            </div>
                        ))
                    }
                   </div>
                </div>
         </div>
}