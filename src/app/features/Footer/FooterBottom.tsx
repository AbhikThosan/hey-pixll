import Link from "next/link"

export const FooterBottom = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 mt-8 lg:mt-0 w-full">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-medium text-white text-center lg:text-left">hey@pixll.com</h2>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 w-full lg:w-1/2 justify-center lg:justify-end">
                <ul className="flex items-center justify-center gap-3">
                    <li>
                        <Link href="/" className="text-sm md:text-base font-normal text-[#888888] underline">Privacy</Link>
                    </li>
                    <li>
                        <Link href="/" className="text-sm md:text-base font-normal text-[#888888] underline">Terms</Link>
                    </li>
                </ul>
                <p className="text-sm md:text-base font-normal text-[#888888] md:ml-[110px] text-center lg:text-left"> © 2017 - 2025 Pixll </p>
            </div>
        </div>
    )
}