import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

const faqs = [
  {
    title: "What services do you offer?",
    description: "We offer a comprehensive range of digital services including web design, web development, mobile app development, digital marketing, SEO optimization, and business strategy consulting."
  },
  {
    title: "How long does a typical project take?",
    description: "Project timelines vary based on scope and complexity. A simple website typically takes 4-6 weeks, while more complex web applications can take 3-6 months."
  },
  {
    title: "What is your pricing structure?",
    description: "We offer flexible pricing options including fixed-price projects, hourly rates, and retainer agreements with transparent pricing and no hidden fees."
  },
  {
    title: "Do you provide ongoing support after launch?",
    description: "Yes, we offer comprehensive post-launch support including maintenance packages, security updates, performance monitoring, and feature enhancements."
  },
  {
    title: "How do we get started?",
    description: "Simply reach out through our contact form or give us a call. We'll schedule a free consultation to discuss your project requirements."
  }
]

export default function FAQ() {
  return (
    <div className="lg:grid lg:grid-cols-12 pb-20 pt-30">
      <div className="lg:col-start-2 lg:col-span-10 flex flex-col gap-4">

        {/* Header */}
        <p className="text-sm font-semibold tracking-widest text-green-500 uppercase self-center">
          faq
        </p>
        <h2 className="text-4xl font-semibold text-gray-900 tracking-wider text-center uppercase self-center">
          frequently asked questions
        </h2>

        {/* Each item is its own accordion card */}
        <div className="flex flex-col gap-4 mt-17 max-w-2xl w-full mx-auto">
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {faqs.map((item) => (
              <AccordionItem
                key={item.title}
                value={item.title}
                className="border border-gray-200 rounded-lg px-6 shadow-sm bg-white data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="hover:cursor-pointer hover:no-underline text-left font-normal text-gray-900 py-5 text-md tracking-wide font-semibold data-[state=open]:text-green-500">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 pb-5">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </div>
  )
}