import Image from "next/image";
import pcImage1 from "@/public/images/blog_1.jpg"
import pcImage2 from "@/public/images/blog_2.jpg"
import pcImage3 from "@/public/images/blog_3.jpg"
import { Button } from "./ui/button";
import { ChevronRight, MessageSquare } from "lucide-react";
export default function Blog(){
    return <div className="md:grid md:grid-cols-12 pt-30 bg-gray-50">
                 <div className="md:col-start-2 md:col-span-10 flex flex-col gap-4">

                   {/* Header */}
                   <p className="text-sm font-semibold tracking-widest text-green-500 uppercase self-center">
                     Blog
                   </p>
                   <h2 className="text-4xl max-w-xl md:text-4xl font-semibold text-gray-900 tracking-wider text-center uppercase self-center">
                     our blog
                   </h2>
                   <p className="text-gray-500 font-light text-center leading-relaxed px-4 my-5 self-center">
                     Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                   </p>
                   <div className="grid grid-cols-1 md:grid-cols-3 place-items-center md:place-items-start gap-20 md:gap-5 my-20">
                        <div className="flex flex-col w-full max-w-md mx-auto">
                            <div className="relative w-full h-64 md:h-52 lg:h-64">
                                <Image src={pcImage1} alt="pc-image-1" fill className="object-cover" />
                                <div className="absolute top-0 left-0 bg-green-500 flex gap-2 py-3 px-7 text-white">
                                    <p className="flex justify-center items-center text-5xl font-semibold">12</p>
                                    <p className="flex flex-col"> 
                                        <span>2032</span>
                                        <span>March</span>
                                    </p>
                                </div>
                            </div>
                            <p className="font-medium text-lg tracking-wide leading-relaxed my-3">Why Lead Generation is Key for Bussiness Growth</p>
                            <p className="text-gray-500 text-sm tracking-wide leading-relaxed">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <div className="flex justify-between items-center mt-7">
                                <Button className="p-2 md:p-5 rounded-full bg-green-500 tracking-wide text-xs lg:text-sm">Read More <ChevronRight size={24} strokeWidth={3} /></Button>
                                <p className="flex items-center gap-1 text-gray-500 text-sm tracking-wide">Admin <MessageSquare className="w-3 h-3 lg:w-5 lg:h-5" /> 3</p>
                            </div>
                        </div>
                       <div className="flex flex-col w-full max-w-md mx-auto">
                            <div className="relative w-full h-64 md:h-52 lg:h-64">
                                <Image src={pcImage2} alt="pc-image-1" fill className="object-cover" />
                                <div className="absolute top-0 left-0 bg-green-500 flex gap-2 py-3 px-7 text-white">
                                    <p className="flex justify-center items-center text-5xl font-semibold">12</p>
                                    <p className="flex flex-col"> 
                                        <span>2032</span>
                                        <span>March</span>
                                    </p>
                                </div>
                            </div>
                            <p className="font-medium text-lg tracking-wide leading-relaxed my-3">Why Lead Generation is Key for Bussiness Growth</p>
                            <p className="text-gray-500 text-sm tracking-wide leading-relaxed">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <div className="flex justify-between items-center mt-7">
                                <Button className="p-2 md:p-5 rounded-full bg-green-500 tracking-wide text-xs lg:text-sm">Read More <ChevronRight size={24} strokeWidth={3} /></Button>
                                <p className="flex items-center gap-1 text-gray-500 text-sm tracking-wide">Admin <MessageSquare className="w-3 h-3 lg:w-5 lg:h-5" /> 3</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full max-w-md mx-auto">
                            <div className="relative w-full h-64 md:h-52 lg:h-64">
                                <Image src={pcImage3} alt="pc-image-1" fill className="object-cover" />
                                <div className="absolute top-0 left-0 bg-green-500 flex gap-2 py-3 px-7 text-white">
                                    <p className="flex justify-center items-center text-5xl font-semibold">12</p>
                                    <p className="flex flex-col"> 
                                        <span>2032</span>
                                        <span>March</span>
                                    </p>
                                </div>
                            </div>
                            <p className="font-medium text-lg tracking-wide leading-relaxed my-3">Why Lead Generation is Key for Bussiness Growth</p>
                            <p className="text-gray-500 text-sm tracking-wide leading-relaxed">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <div className="flex justify-between items-center mt-7">
                                <Button className="p-2 md:p-5 rounded-full bg-green-500 tracking-wide text-xs lg:text-sm">Read More <ChevronRight size={24} strokeWidth={3} /></Button>
                                <p className="flex items-center gap-1 text-gray-500 text-sm tracking-wide">Admin <MessageSquare className="w-3 h-3 lg:w-5 lg:h-5" /> 3</p>
                            </div>
                        </div>
                   </div>
                </div>
         </div>
}