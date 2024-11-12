import { romoIntro } from "../../utils/constants";

export default function Intro () {
    return (
        <section id="intro" className={`flex lg:flex-row flex-col lg:space-x-10 justify-center p-10 lg:p-20 lg:max-w-[50%] mx-auto lg:space-y-0 space-y-4`}>
            <div id="romo" className={`bg-rblack max-w-fit mx-auto my-auto rounded-2xl`}>
                <img src={`/assets/romo-fuck.png`} alt={`romo-fuck`} className={`w-[150px] lg:w-[125rem] mx-auto`} />
            </div>
            <div id="romo-intro" className={`my-auto text-center lg:text-left lg:flex lg:flex-col lg:justify-center`}>
                <h1 className={`lg:text-7xl text-3xl font-bold`}>{romoIntro?.title}</h1>
                <p className={`font-mali lg:text-xl text-sm`}>{romoIntro?.description}</p>
            </div>
        </section>
    )
}