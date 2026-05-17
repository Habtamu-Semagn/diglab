export default function Overview() {
    return <div className="grid grid-cols-12 h-70 bg-green-500 text-white flex justify-around items-center">
        <div className="col-start-2 col-span-10 grid sm:grid-cols-2 lg:grid-cols-4 flex-wrap justify-around ">
            <p className="flex flex-col items-center"><span className="text-5xl font-semibold">500</span><span className="uppercase tracking-wide mt-5">happy clients</span></p>
            <p className="flex flex-col items-center"><span className="text-5xl font-semibold">850</span><span className="uppercase tracking-wide mt-5">projects completed</span></p>
            <p className="flex flex-col items-center"><span className="text-5xl font-semibold">20</span><span className="uppercase tracking-wide mt-5">years of experience</span></p>
            <p className="flex flex-col items-center"><span className="text-5xl font-semibold">24</span><span className="uppercase tracking-wide mt-5">awards won</span></p>
        </div>
    </div>
}