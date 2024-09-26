import resumeImg from "../Assets/resumeSample.png";

export default function Resume() {
    return <section className="flex flex-col md:flex-row bg-primary md:pb-7 px-5">
        <div className="mt-10 py-5 md:w-1/3 md:ml-24 justify-end">
            <img className="w-[500px]" src={resumeImg} alt="resume"></img>
        </div>
        <div className="md:w-1/2 flex justify-center">
            <div className="flex flex-col justify-center ml-10">
                <h1 className="text-4xl text-white border-b-2 mb-4 w-[140px] font-bold">Resume</h1>
                <p className="text-white">You can view my resume here <a className="btn" href="#">Download</a></p>
            </div>
        </div>
    </section>
}