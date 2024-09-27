import aboutImg from "../Assets/About.png";

export default function About() {
    return <section id="about" className="flex flex-col md:flex-row bg-primary md:pb-7 px-5">
        <div className="mt-10 py-5 md:w-1/3 md:ml-24">
            <img src={aboutImg} alt="My portrait"></img>
        </div>
        <div className="md:w-1/2 flex justify-center">
            <div className="flex flex-col justify-center ml-10">
                <h1 className="text-4xl text-white border-b-2 mb-4 w-[170px] font-bold">About Me</h1>
                <p className="text-white pb-10 md:pb-0">Innovative software engineer with a strong foundation in programming and problem-solving.<br/><br/> Proficient in multiple programming languages and development tools.<br/><br/> Experienced in Figma, Structured Query Language and other programming and designing platform.<br/><br/> Passionate about staying upto-date with emerging technologies and collaborating with cross-functional teams to deliver cutting-edge products.</p>
            </div>
        </div>
    </section>
}