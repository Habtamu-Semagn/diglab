import Profile from "./Profile";
import profile1 from "@/public/images/staff-1.jpg"
import profile2 from "@/public/images/staff-2.jpg"
import profile3 from "@/public/images/staff-3.jpg"
import profile4 from "@/public/images/staff-4.jpg"
const profiles = [
    {
        imagesrc: profile1,
        name: "Lloyd Wilson",
        role: "CEO, Founder"
    },
    {
        imagesrc: profile2,
        name: "Rachel Parker",
        role: "Web Designer"
    },
    {
        imagesrc: profile3,
        name: "Ian Smith",
        role: "Web Developer"
    },
    {
        imagesrc: profile4,
        name: "Alicia Henderson",
        role: "GRAPHIC DESIGNER"
    },
]
export default function Staff() {
    return <div className="lg:grid lg:grid-cols-12 pb-20 pt-30">
          <div className="lg:col-start-2 lg:col-span-10 flex flex-col gap-4">
    
            {/* Header */}
            <p className="text-sm font-semibold tracking-widest text-green-500 uppercase self-center">
              About us
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-wide text-center uppercase self-center">
              our staff
            </h2>
            <p className="text-gray-500 font-light text-center max-w-2xl leading-relaxed px-4 my-5 self-center">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
            </p>
            {/* <div className="flex flex-wrap justify-around mt-10"></div> */}
            <div className="col-start-1 col-span-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10">
                {
                    profiles.map(item => <Profile key={item.name} imagesrc={item.imagesrc} name={item.name} role={item.role} />)
                }
            </div>
          </div>
        </div>
}