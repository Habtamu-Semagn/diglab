import Image from "next/image";
import heroImage from "@/public/pc_image.png"
import { Button } from "@/components/ui/button";
import { BarChart2, FlaskConical, LineChart, Layout, CreditCard, Cpu, Lightbulb } from "lucide-react";
export default function Home() {
  const menuItems = [
  { icon: BarChart2, label: "Business Strategy" },
  { icon: FlaskConical, label: "Research" },
  { icon: LineChart, label: "Data Analysis" },
  { icon: Layout, label: "UI Design", active: true },
  { icon: CreditCard, label: "Ux Design" },
  { icon: Cpu, label: "Technology" },
  { icon: Lightbulb, label: "Creative" },
];
  return (
    <>
    <div className="bg-white-50 grid grid-cols-12">
      
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
   <div className="bg-green-500 w-64 min-h-screen flex flex-col justify-center px-8 py-10 gap-2 relative">
      {menuItems.map((item) => (
        <div
          key={item.label}
          className={`relative flex items-center gap-4 py-3 px-2 rounded-lg cursor-pointer hover:bg-green-400 transition-colors ${
            item.active ? "font-bold text-white" : "text-green-100"
          }`}
        >
          <item.icon className="w-6 h-6" strokeWidth={1.5} />
          <span className="text-lg">{item.label}</span>

          {/* The arrow pointer on the right */}
          {item.active && (
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-0 h-0 
              border-t-[16px] border-t-transparent 
              border-l-[16px] border-l-green-500 
              border-b-[16px] border-b-transparent">
            </div>
          )}
        </div>
      ))}
    </div>
    </>
  );
}
