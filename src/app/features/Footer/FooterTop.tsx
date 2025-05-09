import Image from "next/image";
import footerLogo from "./../../../../public/images/footer-logo.png";
import Link from "next/link";
export const FooterTop = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 w-full">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                <Image src={footerLogo} alt="footer-logo" className="w-[200px] md:w-auto" />
            </div>
            <ul className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 w-full lg:w-1/2 justify-center lg:justify-end">
                <li className="text-sm md:text-base font-medium underline">
                    <Link href="/">Linkedin</Link>
                </li>
                <li className="text-sm md:text-base font-medium underline">
                    <Link href="/">Twitter</Link>
                </li>
                <li className="text-sm md:text-base font-medium underline">
                    <Link href="/">Instagram</Link>
                </li>
                <li className="text-sm md:text-base font-medium underline">
                    <Link href="/">Facebook</Link>
                </li>
            </ul>
        </div>
    )
}