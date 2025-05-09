import footerBg from "../../../../public/images/Footer-bg.png"
import { FooterTop } from "./FooterTop"
import { FooterBottom } from "./FooterBottom"
export const Footer = () => {

    return (
        <div 
        className="py-12"
        style={{
            backgroundImage: `url(${footerBg.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <FooterTop />
            <FooterBottom />
        </div>
    )
}