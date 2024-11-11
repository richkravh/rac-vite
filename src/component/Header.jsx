import { raccoonLinks } from "../utils/constants";

export default function Header () {
    return (
        <div className={`flex justify-between bg-rgrey p-2 text-rblack`}>
            <div className={`flex space-x-2`}>
                <img src="/assets/icon.png" alt="raccoon" className={`my-auto`} width={30} />
                <a href="#intro" className={`lg:text-xl text-sm my-auto`}>About Romo</a>
            </div>
            <div className={`flex lg:space-x-2 space-x-1 lg:text-xl text-sm my-auto uppercase`}>
                {raccoonLinks.map((link, i) => {
                    return (
                        <a key={i} href={link.href} className={`my-auto lg:px-2 lg:py-1`}>
                            {link.title}
                        </a>
                    )
                })}
                <a id="buy-now" className={`text-rgrey bg-rblack lg:px-2 lg:py-1 rounded-md py-1 px-2`}>
                    Buy Now
                </a>
            </div>
        </div>
    )
}