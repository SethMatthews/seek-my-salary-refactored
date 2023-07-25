import Image from 'next/image';
import Link from "next/link";


const iconsHeight = 40;

const Footer = () => {
    return (  
        <div className=" flex justify-center gap-2 my-5">
            <Link href={"https://www.linkedin.com/in/seth-matthews/"} target='_blank'>
                <Image src={"/linkedin-logo.svg"} alt="linkedin icon" height={iconsHeight} width={iconsHeight} />
            </Link>
            <Link href={"https://github.com/SethMatthews"} target='_blank'>
                <Image src={"/github-logo.svg"} alt="GitHub icon" height={iconsHeight} width={iconsHeight} />
            </Link>
            <Link href={"https://twitter.com/theSethMatthews"} target='_blank'>
                <Image src={"/twitter-logo.svg"} alt="Twitter icon" height={iconsHeight} width={iconsHeight} />
            </Link>
            <p>Created by <br/> Seth Matthews</p>
        </div>
    );
}
 
export default Footer;