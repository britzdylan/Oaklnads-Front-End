import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';


export default function Address() {

    return (
        <div className="w-full">
            <div className="flex flex-row content-center">
                <FaMapMarkerAlt size="1.5em" />
                <p className="ml-5">c/o BramFischer & George Street, Randburg</p>
            </div>
            <div className="flex flex-row content-center mt-3 mb-8">
                <FaPhoneAlt size="1.3em" />
                <p className="ml-5">011 781 5569</p>
            </div>

        </div>
    )
}