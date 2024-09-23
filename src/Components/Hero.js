import HeroImg from '../Assets/Hero.png'

export default function Hero() {
    return <section className='flex px-5 py-32 bg-secondary justify-center'>
        <h1 className='w-1/2 text-white text-4xl py-20'>Hi,<br/> I'm Thianesh Govindasamy <p className='text-2xl'>I'm a Full-Stack developer</p></h1>
        <img className='w-1/3' src={HeroImg}/>
    </section>
}