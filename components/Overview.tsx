export default function Overview() {
    return <div className="grid grid-cols-12 bg-[#42E47A] text-white flex justify-around items-center py-25">
        <div className="col-start-2 col-span-10 grid sm:grid-cols-2 md:grid-cols-4 gap-15 flex-wrap justify-around ">
            <p className="flex flex-col items-center"><span className="text-5xl font-semibold">500</span><span className="uppercase tracking-wide mt-2 sm:mt-5 text-center">happy clients</span></p>
            <p className="flex flex-col items-center"><span className="text-5xl font-semibold">850</span><span className="uppercase tracking-wide mt-2 sm:mt-5 text-center">projects completed</span></p>
            <p className="flex flex-col items-center"><span className="text-5xl font-semibold">20</span><span className="uppercase tracking-wide mt-2 sm:mt-5 text-center">years of experience</span></p>
            <p className="flex flex-col items-center"><span className="text-5xl font-semibold">24</span><span className="uppercase tracking-wide mt-2 sm:mt-5 text-center">awards won</span></p>
        </div>
    </div>
}