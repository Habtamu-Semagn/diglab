import { Heart, Mail, PhoneIcon } from "lucide-react";
import { BiLocationPlus } from "react-icons/bi";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook, FaLongArrowAltRight, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return <div className="lg:grid lg:grid-cols-12 pb-20 pt-30 bg-black text-gray-400">
                 <div className="grid sm:grid-cols-4 gap-10 lg:col-start-2 lg:col-span-10 flex flex-col gap-4">

                   <div className="flex flex-col gap-10">
                    <p className="text-xl tracking-wide font-medium text-white">About DigiLab</p>
                    <p className="text-sm tracking-wide leading-loose">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="flex gap-4"><FaTwitter className="w-8 h-8" /><FaFacebook className="w-8 h-8" /><BsInstagram className="w-8 h-8" /></p>
                   </div>

                   <div className="flex flex-col gap-10">
                    <p className="text-xl tracking-wide font-medium text-white">Links</p>
                    <div className="flex flex-col gap-5">
                        <li className="list-none flex gap-3 text-gray-400 tracking-wide text-sm flex items-center"><FaLongArrowAltRight />Home</li>
                        <li className="list-none flex gap-3 text-gray-400 tracking-wide text-sm flex items-center"><FaLongArrowAltRight />About</li>
                        <li className="list-none flex gap-3 text-gray-400 tracking-wide text-sm flex items-center"><FaLongArrowAltRight />Services</li>
                        <li className="list-none flex gap-3 text-gray-400 tracking-wide text-sm flex items-center"><FaLongArrowAltRight />Projects</li>
                        <li className="list-none flex gap-3 text-gray-400 tracking-wide text-sm flex items-center"><FaLongArrowAltRight />Contact</li>
                    </div>
                   </div>
                   <div className="flex flex-col gap-10">
                    <p className="text-xl tracking-wide font-medium text-white">Services</p>
                    <div className="flex flex-col gap-5">
                        <li className="list-none flex gap-3 text-gray-400 tracking-wide text-sm flex items-center"><FaLongArrowAltRight />Web Design</li>
                        <li className="list-none flex gap-3 text-gray-400 tracking-wide text-sm flex items-center"><FaLongArrowAltRight />Web Development</li>
                        <li className="list-none flex gap-3 text-gray-400 tracking-wide text-sm flex items-center"><FaLongArrowAltRight />Bussiness Strategy</li>
                        <li className="list-none flex gap-3 text-gray-400 tracking-wide text-sm flex items-center"><FaLongArrowAltRight />Data Analysis</li>
                        <li className="list-none flex gap-3 text-gray-400 tracking-wide text-sm flex items-center"><FaLongArrowAltRight />Graphic Design</li>
                    </div>
                   </div>
                   <div className="flex flex-col gap-10">
                    <p className="text-xl tracking-wide font-medium text-white">Have a Question</p>
                    <p className="flex gap-5"><BiLocationPlus className="w-15 h-15" />	203 Fake St. Mountain View, San Francisco, California, USA</p>
                    <p className="flex gap-5"><PhoneIcon /> 	+2 392 3929 210</p>
                    <p className="flex gap-5"><Mail /> 	info@yourdomain.com</p>
                   </div>
                </div>

               <p className="tracking-wide lg:col-start-2 lg:col-span-10 text-center text-gray-400 text-sm pt-6 mt-10 flex items-center justify-center gap-1">
    Copyright &copy;2026 All rights reserved | This template is made with <Heart size={14} /> by Colorlib
  </p>
            </div> 
}