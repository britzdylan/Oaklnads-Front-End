import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

export default function SocialIcons() {

    return (
        <div className="flex flex-row content-center justify-start md:w-full w-1/2 my-5 cursor-pointer">
            <Link href="#">
                <div className="mr-5">
                    <FaFacebookF size="1.2em" />
                </div>
            </Link>
            <Link href="#">
                <div className="mr-5">
                    <FaInstagram size="1.3em" />
                </div>
            </Link>
            <Link href="#">
                <div className="mr-5">
                    <FaYoutube size="1.5em" />
                </div>
            </Link>
        </div>
    )
}