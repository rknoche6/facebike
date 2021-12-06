import Image from "next/image"
import {
    SearchIcon
} from "@heroicons/react/solid"
function Header() {
    return (
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
    )
}

export default Header
