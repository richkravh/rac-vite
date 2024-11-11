import { romoIntro } from "../../utils/constants";

export default function Intro () {
    return (
        <section id="intro" className={`flex space-x-10 justify-center p-10 max-w-[50%] mx-auto`}>
            <div id="romo" className={`bg-rblack my-auto rounded-2xl`}>
                <img src={`/assets/romo-fuck.png`} width={1000} alt={`romo-fuck`} />
            </div>
            <div id="romo-intro" className={`my-auto`}>
                <h1 className={`lg:text-5xl font-bold`}>{romoIntro?.title}</h1>
                <p className="font-mali">{romoIntro?.description}</p>
            </div>
        </section>
    )
}