import {AboutImg} from '../Assets/About.png';

export default function About() {
    return <section>
        <div>
            <img src={AboutImg}></img>
        </div>
        <div>
            <h1>About Me</h1>
            <p>Some information about myself</p>
        </div>
    </section>
}