import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import HeroImg from "../Assets/Hero.png";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row px-5 md:py-5 bg-secondary justify-center">
      <div className="md:w-1/2">
        <h1 className="text-white text-6xl mt-10 font-hero-font md:ml-24 ">
          Hi,
          <br /> I'm Thianesh Govindasamy
          <p className="text-2xl">I'm a Full-Stack developer</p>
        </h1>
        <div className="flex md:ml-24 py-10">
          <a href="thianesh2003@gmail.com" className="pr-5 hover:text-white">
            <AiOutlineMail size={40} />
          </a>
          <a href="https://www.linkedin.com/in/thianesh-g-686975200" className="pr-5 hover:text-white">
            <AiOutlineLinkedin size={40} />
          </a>
          <a href="https://github.com/thianesh-03" className="pr-5 hover:text-white">
            <AiOutlineGithub size={40} />
          </a>
          <a href="https://x.com/ThianeshGovind1" className="hover:text-white">
            <AiOutlineTwitter size={40} />
          </a>
        </div>
      </div>
      <img className="md:w-1/3 md:mr-20 hidden lg:block" src={HeroImg} alt="portrait" />
    </section>
  );
}
