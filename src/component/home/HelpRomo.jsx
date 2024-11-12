export default function HelpRomo () {
    return (
        <section className={`bg-rblack lg:p-10 p-2 grid lg:grid-cols-2 grid-cols-1`}>
            <div id="text" className={`my-auto p-10 text-rgrey lg:order-1 order-2`}>
                <h1 className={`lg:text-8xl text-6xl`}>Help Romo!</h1>
                <h2 className={`lg:text-4xl text-2xl`}>Escaping The Matrix</h2>
                <p className={`font-mali lg:text-xl text-lg`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div id="img" className={`lg:order-2 order-1`}>
                <img src="/assets/rac-desk.png" className={`lg:w-[500px] mx-auto`}/>
            </div>
        </section>
    )
}