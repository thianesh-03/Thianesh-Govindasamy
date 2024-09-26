import websiteImg1 from "../Assets/website1.png"
import websiteImg2 from "../Assets/website2.png"
import websiteImg3 from "../Assets/website3.png"

export default function Projects() {
    return <section className="flex flex-col px-5 py-20 justify-center bg-secondary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl text-white border-b-2 mb-4 w-[140px] font-bold">Projects</h1>
                <p>These are some of my best projects I've done using MEAN and MERN</p>
            </div>
        </div>
        <div className="w-full">
            <div className="flex flex-col md:flex-row px-10 gap-5">
                <div className="relative">
                    <img className="h-[200px]" src={websiteImg1}></img>
                    <div className="absolute right-0 left-0 bottom-0 top-0 bg-primary opacity-0 duration-500 hover:opacity-100">
                        <p className="text-center py-5">Shopping application created using MERN stack</p>
                    </div>
                </div>
                <div className="relative">
                    <img className="h-[200px]" src={websiteImg2}></img>
                    <div className="absolute right-0 left-0 bottom-0 top-0 bg-primary opacity-0 duration-500 hover:opacity-100">
                        <p className="text-center py-5">A UI/UX design for AR site created using Figma</p>
                    </div>
                </div>
                <div className="relative">
                    <img className="h-[200px]" src={websiteImg3}></img>
                    <div className="absolute right-0 left-0 bottom-0 top-0 bg-primary opacity-0 duration-500 hover:opacity-100">
                        <p className="text-center py-5">A site for selling and buying farming utilities online created using MEAN stack</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}