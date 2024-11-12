import CopyToClipboard from "react-copy-to-clipboard";
import { contractAddress } from "../../utils/constants";
import { useState } from "react";

export default function Hero () {
    const [isCopied, setIsCopied] = useState(false);
    return (
        <section id="hero-romo" className={`bg-rblack flex flex-col justify-center relative`}>
            <div id="romo-roll" className={`min-w-full min-h-full p-2 absolute flex flex-col justify-center lg:space-y-10 space-y-2`}>
                <img src="/assets/romo-roll.png" className={`mx-auto w-[150px] lg:w-[750px] opacity-50`} />
                <div id="contract-address" className={`bg-white/70 lg:p-2 max-w-fit mx-auto flex space-x-2 rounded-lg p-1`}>
                    <p className={`py-1 lg:py-2 lg:px-10 px-4 text-sm lg:text-xl`}>{contractAddress?.substring(0,5)}...{contractAddress?.substring(35,42)}</p>
                    <CopyToClipboard text={contractAddress} onCopy={() => setIsCopied(true)}>
                        <button className={`lg:py-2 lg:px-10 py-1 px-4 text-rgrey bg-rblack rounded-lg`}>{isCopied ? (`Copied`) : (`Copy`)}</button>
                    </CopyToClipboard>
                </div>
            </div>
            <div id="text" className={`uppercase text-rgrey lg:space-y-[-5vh] text-center lg:pb-20 py-10`}>
                <h1 className={`lg:text-[349px] text-6xl`}>Romo</h1>
                <p className={`lg:text-[165px] text-5xl`}>The Raccoon</p>
            </div>
        </section>
    )
}