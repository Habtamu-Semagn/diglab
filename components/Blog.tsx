import Image from "next/image";
import pcImage1 from "@/public/images/person_1.jpg"
import { Button } from "./ui/button";
import { ChevronRight, MessageSquare, MessageSquareText, TextWrapIcon } from "lucide-react";
export default function Blog(){
    return <div className="lg:grid lg:grid-cols-12 pb-20 pt-30 bg-gray-50">
                 <div className="lg:col-start-2 lg:col-span-10 flex flex-col gap-4">

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
                   <div className="grid sm:grid-cols-3 gap-10 my-20">
                        <div className="flex flex-col">
                            <div className="relative">
                                <Image src={pcImage1} alt="pc-image-1"/>
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
                                <Button className="p-5 rounded-full bg-green-500 tracking-wide">Read More <ChevronRight size={24} strokeWidth={3} /></Button>
                                <p className="flex gap-3 text-gray-500 text-sm tracking-wide">Admin <MessageSquare /> 3</p>
                            </div>
                        </div>
                       <div className="flex flex-col">
                            <div className="relative">
                                <Image src={pcImage1} alt="pc-image-1"/>
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
                                <Button className="p-5 rounded-full bg-green-500 tracking-wide">Read More <ChevronRight size={24} strokeWidth={3} /></Button>
                                <p className="flex gap-3 text-gray-500 text-sm tracking-wide">Admin <MessageSquare /> 3</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="relative">
                                <Image src={pcImage1} alt="pc-image-1"/>
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
                                <Button className="p-5 rounded-full bg-green-500 tracking-wide">Read More <ChevronRight size={24} strokeWidth={3} /></Button>
                                <p className="flex gap-3 text-gray-500 text-sm tracking-wide">Admin <MessageSquare /> 3</p>
                            </div>
                        </div>
                   </div>
                </div>
         </div>
}