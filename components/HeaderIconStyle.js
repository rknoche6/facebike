import React from 'react'

function HeaderIconStyle({Icon}) {
    return (
        <div className="flex items-center md:px-10 sm:h-14 cursor-pointer md:hover:bg-gray-100 rounded-xl ">
          <Icon
            className="text-center h-5 sm:h-7 mx-auto my-auto group-hover:text-blue-500"
          />
        </div>
      );
}

export default HeaderIconStyle

