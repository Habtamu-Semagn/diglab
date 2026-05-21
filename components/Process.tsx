function ProcessItem({ index, name, description }: { index: number; name: string; description: string }) {
  return (
    <div className="flex flex-col flex-wrap items-center text-center">
      <p className="text-5xl text-slate-200 font-bold mb-3">0{index + 1}</p>
      <div className="w-25 h-25 rounded-full bg-green-500 flex justify-center items-center">
        icon
      </div>
      <p className="font-semibold text-lg tracking-wide my-5">{name}</p>
      <p className="text-gray-500 tracking-wide w-full max-w-sm">{description}</p>
    </div>
  );
}

function Line() {
  return <div className="hidden lg:block h-[2px] w-8 lg:w-16 bg-green-400 flex-shrink-0 mt-24" />;
  //                                                                               ↑ pushes line down to icon level
}

export default function Process() {
  const processItems = [
    {
      name: "Discovery",
      description: "We start by understanding your business goals, target audience, and project requirements.",
    },
    {
      name: "Planning",
      description: "Our team creates a detailed roadmap with timelines, milestones, and deliverables.",
    },
    {
      name: "Execution",
      description: "We bring your vision to life with cutting-edge technology and creative solutions.",
    },
    {
      name: "Launch",
      description: "We deploy your project and provide ongoing support to ensure continued success.",
    },
  ];

  return (
    <div className="lg:grid lg:grid-cols-12 pb-20 pt-30">
      <div className="lg:col-start-2 lg:col-span-10 flex flex-col gap-4">

        {/* Header */}
        <p className="text-sm font-semibold tracking-widest text-green-500 uppercase self-center">
          Our process
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-wide text-center uppercase self-center">
          How we work
        </h2>

        {/* Items + Lines */}
        {/* <div className="flex flex-col gap-15 sm:flex-row sm:flex-wrap lg:flex-nowrap items-center justify-center w-full mt-5"></div> */}
        <div className="grid grid-cols-1 gap-10 md:gap-0 md:grid-cols-4 place-items-center md:place-items-start w-full mt-25">
          {processItems.map((item, index) => (
            <div key={item.name} className="flex items-center sm:items-start">
              <ProcessItem index={index} name={item.name} description={item.description} />
              {/* Line between items, hidden on mobile */}
              {index < processItems.length - 1 && <Line />}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}