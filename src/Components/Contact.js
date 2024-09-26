import resumeImg from "../Assets/resumeSample.png";

export default function Contact() {
    return <section className="flex flex-col  bg-secondary py-32 px-5">
        <div className="flex flex-col items-center text-white">
                <h1 className="text-4xl border-b-2 mb-4 w-[140px] font-bold">Contact</h1>
                <p>If you want to discuss more in detail, please contact me</p>
                <p className="py-2"><span className="font-bold">Email:</span>thianesh2003@gmail.com</p>
                <p className="py-2"><span className="font-bold">Phone:</span>+91-9677607312</p>
        </div>
    </section>
}