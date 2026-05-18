const contacts = [
    {
        name: "address",
        icon: "icon",
        detail: ["198 West 21th Street, Suite", "721 New York NY 10016"]
    },
    {
        name: "contact number",
        icon: "icon",
        detail: ["+ 1235 2355 98"]
    },
    {
        name: "email address",
        icon: "icon",
        detail: ["info@yoursite.com"]
    },
    {
        name: "website",
        icon: "icon",
        detail: ["yoursite.com"]
    }
]
export default function() {
    return <div className="lg:grid lg:grid-cols-12 pb-20 pt-30 bg-gray-50">
                 <div className="lg:col-start-2 lg:col-span-10 flex flex-col gap-4">

                   {/* Header */}
                   <p className="text-sm font-semibold tracking-widest text-green-500 uppercase self-center">
                     contact
                   </p>
                   <h2 className="text-4xl max-w-xl md:text-4xl font-semibold text-gray-900 tracking-wider text-center uppercase self-center">
                     contact us
                   </h2>
                   <p className="text-gray-500 font-light text-center text-sm tracking-wide leading-relaxed px-4 my-5 self-center">
                     Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                   </p>
                   <div className="grid sm:grid-cols-4 gap-5 mt-10 text-white">
                        {
                            contacts.map(item => <div key={item.name} className="bg-green-500 flex flex-col gap-7 justify-start items-center py-8">
                            <div className="w-25 h-25 rounded-full flex justify-center items-center bg-green-600">{item.icon}</div>
                            <p className="uppercase text-white tracking-wide font-medium">{item.name}</p>
                            <div className="text-center">
                                {
                                    item.detail.length > 0 ? 
                                    <>
                                        <p className="tracking-wide text-sm">{item.detail[0]}</p>
                                        <p className="tracking-wide text-sm">{item.detail[1]}</p>
                                     </> : 
                                     <p className="tracking-wide text-sm">{item.detail[0]}</p>
                                }   
                            </div>
                        </div>)
                        }
                   </div>
                </div>
            </div> 
}