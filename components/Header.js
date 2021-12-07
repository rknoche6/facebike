import Image from "next/image";
import {
    SearchIcon,
    HomeIcon,
    ChatIcon,
    ViewGridIcon,
    BellIcon,
    ChevronDownIcon
} from "@heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    ShoppingCartIcon,
    UserGroupIcon
} from "@heroicons/react/outline";
import HeaderIconStyle from "./MiddleHeaderIcon";
import RightHeaderIcon from "./RightHeaderIcon";
function Header() {
    return (
        <div className="flex shadow-md">   
            {/* Left side of header */}
            <div className="flex items-center">
                <Image 
                    src="https://www.seekpng.com/png/detail/280-2802791_moran-facebook-link-facebook-logo-black.png"
                    alt="err"
                    width={40} 
                    height={30}  
                    layout="fixed"
                />
                <div className = "flex ml-2 items-center rounded-full bg-gray-100 p-2" >
                    <SearchIcon className="h-6 text-gray-600"/>
                    <input className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 " type="text" placeholder="Search Facebike"></input>
                </div>
            </div>

            {/* Middle side of header */}

            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                <HeaderIconStyle Icon={HomeIcon} />
                <HeaderIconStyle Icon={FlagIcon} />
                <HeaderIconStyle Icon={PlayIcon} />
                <HeaderIconStyle Icon={ShoppingCartIcon} />
                <HeaderIconStyle Icon={UserGroupIcon} />
                </div>
            </div>
            {/* Right side of header */}
            <div className="flex items-center justify-end">
                <p>Richard Knoche</p>
                <div className="flex space-x-1 ">
                    <RightHeaderIcon Icon={ViewGridIcon} />
                    <RightHeaderIcon Icon={ChatIcon} />
                    <RightHeaderIcon Icon={BellIcon} />
                    <RightHeaderIcon Icon={ChevronDownIcon} />
                </div>
            </div>
        </div> 
    )
}

export default Header
