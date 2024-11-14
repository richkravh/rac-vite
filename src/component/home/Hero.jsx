import CopyToClipboard from "react-copy-to-clipboard";
import { contractAddress } from "../../utils/constants";
import { useState } from "react";

export default function Hero () {
    const [isCopied, setIsCopied] = useState(false);
    return (
        <section id="hero-romo" className={`bg-rblack flex flex-col justify-center relative lg:py-20 py-10 gap-5`}>
            <div id="text" className={`uppercase text-rgrey lg:space-y-[-5vh] text-center`}>
                <h1 className={`lg:text-[349px] text-6xl`}>Romo</h1>
                <p className={`lg:text-[165px] text-5xl`}>The Raccoon</p>
            </div>
            <div id="contract-address" className={`bg-white/70 lg:py-2 lg:px-20 max-w-fit mx-auto flex justify-between space-x-2 rounded-lg p-1`}>
                    <p className={`py-1 lg:py-2 lg:px-10 px-4 text-sm lg:text-xl w-full`}>{contractAddress?.substring(0,7)}...{contractAddress?.substring(35,42)}</p>
                    <CopyToClipboard text={contractAddress} onCopy={() => setIsCopied(true)}>
                        <button className={`lg:py-2 lg:px-10 py-1 px-4 text-rgrey bg-rblack rounded-lg`}>{isCopied ? (`Copied`) : (`Copy`)}</button>
                    </CopyToClipboard>
                </div>
        </section>
    )
}