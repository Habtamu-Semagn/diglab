"use client"
import { BarChart2, FlaskConical, LineChart, Layout, CreditCard, Cpu, Lightbulb, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
const menuItems = [
 { icon: BarChart2, label: "Business Strategy", content: [
  "We help you craft a clear, actionable business strategy tailored to your goals. From market positioning to growth planning, we align your vision with measurable outcomes that drive long-term success.",
  "Our team of seasoned strategists works closely with you to identify opportunities, eliminate inefficiencies, and build a roadmap that keeps your business ahead of the competition.",
], },
 { icon: FlaskConical, label: "Research", content: [
  "Our research services provide deep insights into your industry, audience, and competition. We combine qualitative and quantitative methods to give you a complete picture of your market landscape.",
  "From user interviews to competitor benchmarking, every research engagement is designed to reduce uncertainty and give your team the confidence to make bold, informed decisions.",
], },
 { icon: LineChart, label: "Data Analysis", content: [
  "Turn raw data into meaningful insights. We analyze your business data to uncover hidden patterns, spot growth opportunities, and identify areas that need immediate attention.",
  "Whether it's building dashboards, setting up KPI tracking, or running predictive models, we make sure your data works for you — not the other way around.",
], },
 { icon: Layout, label: "UI Design", active: true,  content: [
  "We design visually stunning, pixel-perfect interfaces that reflect your brand identity and create lasting impressions. Every screen is crafted with purpose, consistency, and attention to detail.",
  "From design systems and style guides to high-fidelity mockups and responsive layouts, we deliver UI that not only looks great but scales seamlessly across all devices and platforms.",
], },
 { icon: CreditCard, label: "Ux Design", content: [
  "Great products are built around people. We design seamless user experiences that reduce friction, improve engagement, and guide users naturally toward their goals.",
  "Through user journey mapping, wireframing, and usability testing, we make sure every interaction feels intuitive — turning first-time visitors into loyal, satisfied users.",
], },
 { icon: Cpu, label: "Technology", content: [
  "From architecture planning to full-stack development, we build scalable, secure, and high-performance technology solutions tailored to your specific business needs and future growth.",
  "We work with modern stacks and cloud infrastructure to ensure your product is reliable, maintainable, and ready to handle whatever comes next — whether that's 100 users or 1 million.",
], },
 { icon: Lightbulb, label: "Creative", content: [
  "We bring ideas to life through compelling creative work that captures attention and communicates your brand's story. From branding to motion graphics, we craft visuals that leave a mark.",
  "Our creative team blends strategy with artistry to produce marketing assets, illustrations, and brand identities that resonate deeply with your audience and stand out in a crowded market.",
], },
];

const serviceItems = [
    {
        title: "Market Research",
        content: "Even the all-powerful Pointing has no control about the blind."
    },
    {
        title: "Financial Services",
        content: "Even the all-powerful Pointing has no control about the blind."
    },
    {
        title: "Online Marketting",
        content: "Even the all-powerful Pointing has no control about the blind."
    },
    {
        title: "24/7 Help & Support",
        content: "Even the all-powerful Pointing has no control about the blind."
    },
]
export default function Services() {
    const [activeItem, setActiveItem] = useState(menuItems[0].label)
    const activeMenuItem = menuItems.find((item) => item.label === activeItem)
    return <div >
            <div className="grid grid-cols-12 bg-gray-50">
    <div className="col-start-2 col-span-10 md:col-start-2 md:col-span-3 bg-[#42E47A] md:min-h-screen flex flex-col px-8 py-10 gap-2 relative">
      {menuItems.map((item) => (
        <div
          key={item.label}
          onClick={() => setActiveItem(item.label)}
          className={`relative flex items-center gap-4 py-3 px-2 rounded-lg cursor-pointer hover:font-bold transition-colors ${
            item.label ===activeItem ? "font-bold text-white" : "text-green-100"
          }`}
        >
          <item.icon className="w-6 h-6" strokeWidth={1.5} />
          <span className="text-lg">{item.label}</span>
        </div>
      ))}
    </div>
      <div className="col-start-2 col-span-10 pl-8 py-12 md:col-start-6 md:col-span-5 flex items-center justify-center">{
            activeMenuItem && (
                <div className="flex flex-col gap-6 max-w-lg">

      {/* Icon */}
      <div>
        <activeMenuItem.icon style={{color: "#7ac64d"}} className="w-26 h-26 text-green-500" strokeWidth={1} />
      </div>

      {/* Label */}
      <h2 className="text-4xl text-gray-800 tracking-tight">
        {activeMenuItem.label}
      </h2>

      {/* Paragraphs */}
      <div className="flex flex-col gap-4">
        {activeMenuItem.content.length > 0 &&
          activeMenuItem.content.map((item) => (
            <p key={item} className="text-gray-500 text-base leading-relaxed">
              {item}
            </p>
          ))}
      </div>

      {/* Button */}
      <button style={{background: 'linear-gradient(to right, #7ac64d, #31de79)'}} className="border-green-500 w-fit px-8 py-3 hover:bg-green-600 text-white text-sm font-medium rounded-full transition-colors duration-200">
        Learn More
      </button>

          </div>
            )
        }</div>
            </div>

            <div className="grid grid-cols-12 bg-[url('/images/service_section_image.jpg')] bg-cover bg-center bg-no-repeat">
                {serviceItems.map((item) => <div key={item.title} className="group col-start-2 sm:col-start-4 md:col-start-7 col-span-11 md:col-span-6 bg-white mt-1 flex py-7 opacity-90 transition-transform duration-500 cursor-pointer hover:-translate-x-10 sm:hover:-translate-x-20">
                    <p className="px-5 h-full flex items-center justify-center">
                        <ChevronRight className="text-green-500 group-hover:hidden" /> 
                        <ChevronLeft className="text-green-500 hidden group-hover:block" />
                    </p>
                    <div className="flex flex-col gap-3">
                        <p className="text-green-500 text-xl tracking-wide">{item.title}</p>
                        <p className="text-md">{item.content}</p>
                    </div>
                </div>)}
                               
            </div>
    </div>
}