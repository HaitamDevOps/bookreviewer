import React from 'react';
import Image from "next/image";



function Error(props) {
    return (
        <div className='flex flex-col 
        justify-center items-center flex-wrap
        min-h-[calc(100vh-4rem)] mt-[-2rem] drop-shadow-lg
        '>
          <Image
          height={80}
          width={80}
          src={"/error-icon.svg"}
          alt="Error Icon"
          style={{objectFit: "contain"}}
          />
          <p className="mt-4 text-red-600 text-center text-xl font-semibold w-96">{props.error}</p>
        </div>

    );
}

export default Error;