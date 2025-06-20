import { Link } from "react-router-dom";

export default function ProfileDropdown({ userImage }) {
    return (
        <div className="relative">
            <Link to={"user-profile"} className="flex items-center gap-2 hover:text-gray-200 transition hover:underline">
                <img src={userImage} alt="User" className="w-7 h-7 rounded-full object-cover" />
                Profile
            </Link>
        </div>
    );
}
