import Image from "next/image";
import heroImage from "@/public/pc_image.png"
import { Button } from "@/components/ui/button";
export default function HeroSection() {
    return <div className="bg-white-50 grid grid-cols-12">
      
      {/* Navbar */}
      <nav className="absolute top-0 left-[8.33%] right-[8.33%] col-start-2 col-span-11 flex items-center justify-between py-6">
        <h2 className="text-xl font-bold">DIGI<span className="text-[#31de79]">LAB</span></h2>
        <ul className="flex gap-13 text-gray-600 text-green-500">
          <li>Home</li>
          <li>Services</li>
          <li>Projects</li>
          <li>About</li>
          <li>Testimony</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="col-start-2 col-span-5 flex flex-col justify-center pr-15 gap-10">
        <h1 className="text-green-500 tracking-widest">WELCOME TO THE DIGILAB</h1>
        <p className="text-5xl capitalize tracking-wide font-serif">small details make a big <span className="font-bold">impression</span></p>
        <p className="text-xl">A small river named Dudden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
        <Button style={{background: 'linear-gradient(to right, #7ac64d, #31de79)'}} className="self-start px-12 py-7 text-lg rounded-full">Get in touch</Button>
      </div>
      <div className="col-start-7 col-span-6 bg-blue-300 flex">
        <Image src={heroImage} alt="hero image" className="w-full h-full"/>
      </div>
    </div>
}