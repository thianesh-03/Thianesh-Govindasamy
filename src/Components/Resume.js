import resume from "../Assets/resume.pdf";
// import resumeImg from "../Assets/resumeSample.png";

export default function Resume() {
  return (
    <section
      id="resume"
      className="flex flex-col md:flex-row bg-primary md:pb-7 px-5"
    >
      <div className="mt-10 py-0 md:w-1/3 md:ml-24 justify-end">
        {/* <img className="w-[400px]" src={resumeImg} alt="resume"></img> */}
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center ml-10">
          <h1 className="text-4xl text-white md:pt-5 border-b-2 mb-4 w-[140px] font-bold">
            Resume
          </h1>
          <p className="text-white pb-14 md:pb-0">
            You can view my resume here{" "}
            <a
              className="btn bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-300"
              href={resume}
              download
            >
              Download
            </a>
          </p>
        </div>
      </div>
      <a id="resumeLink" href="/docs/resume.pdf" download hidden></a>
    </section>
  );
}
