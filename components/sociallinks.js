import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

export default function SocialIcons() {

    return (
        <div className="flex flex-row content-center justify-between md:w-full w-1/2 cursor-pointer">
            <Link href="#">
                <FaFacebookF size="1.2em" />
            </Link>
            <Link href="#">
                <FaInstagram size="1.3em" />
            </Link>
            <Link href="#">
                <FaYoutube size="1.5em" />
            </Link>
        </div>
    )
}