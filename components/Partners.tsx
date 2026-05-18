
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
                   <div className="flex gap-10 my-20">
                    {
                        [1,2,3,4,5].map(item => <div key={item} className="w-70 h-15 bg-gray-200 flex items-center justify-center text-gray-400">Logo {item}</div>)
                    }
                   </div>
                </div>
         </div>
}