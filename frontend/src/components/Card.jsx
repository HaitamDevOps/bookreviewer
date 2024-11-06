import React from 'react';
import { capitalizeWords } from '@/utils/stringUtils';
import { getLanguageByAbbreviation } from '@/utils/languageUtils';


function Card(props) {
    return (
        <div className="relative m-4 flex w-full max-w-60 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <a className="relative mx-3 mt-3 flex h-52 overflow-hidden rounded-xl justify-center align-middle" href={`/book/${props.id}`}>
                <img className="object-cover
                 hover:scale-105 transition-all duration-300" 
                 src={props.img} alt="product image" />
                <span className="absolute top-0 left-0 m-2 rounded-full bg-red-600 px-2 text-center text-sm font-medium text-white">New</span>
                <div className='absolute top-0 right-0 
                flex flex-row items-center m-2 px-2
                bg-gray-200 rounded-full bg-opacity-70 hover:bg-opacity-100'>
                    <span className='font-semibold text-sm text-slate-900'>4.5</span>
                    <svg aria-hidden="true" className="h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                </div>
            </a>
            <div className="mt-2 px-5 pb-4 text-gray-800 text-center text-sm">
                <a href={`/book/${props.id}`}>
                    <h5 className="text-xl tracking-tight font-bold hover:text-amber-500">{capitalizeWords(props.title.substring(0, 25))}</h5>
                </a>                  
                <p className=''>by <a href="#" className="hover:text-amber-500">{capitalizeWords(props.author)}</a></p>
                <p className='text-xs'>{getLanguageByAbbreviation(props.language.toUpperCase())}</p>
            </div>
        </div>
    );
}

export default Card;