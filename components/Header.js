import Image from "next/image";
import {
    SearchIcon,
    HomeIcon,
} from "@heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    ShoppingCartIcon,
    UserGroupIcon
} from "@heroicons/react/outline";
import HeaderIconStyle from "./HeaderIconStyle";
function Header() {
    return (
        <div className="flex">   
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

            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                <HeaderIconStyle Icon={HomeIcon} />
                <HeaderIconStyle Icon={FlagIcon} />
                <HeaderIconStyle Icon={PlayIcon} />
                <HeaderIconStyle Icon={ShoppingCartIcon} />
                <HeaderIconStyle Icon={UserGroupIcon} />
                </div>
          </div>
        </div> 
    )
}

export default Header
