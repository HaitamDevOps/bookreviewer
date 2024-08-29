import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import {languageMap} from '../assets/languageMap';


function Book(props) {
    const { id } = useParams();
    const url = "http://localhost:8000/api/book/"+id;

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    function getLanguageName(code) {
      const upperCaseCode = code.toUpperCase();
      return languageMap[upperCaseCode] || 'Unknown Language';
    }

    useEffect(() => {
        fetch(url)
          // .then((response) => response.json())
          .then(response => {
            if(!response.ok){
              if(response.status===404){
                throw new Error ("Element not found !")
              } else {
                throw new Error("No network response !");
              }
            }
            return response.json();
          })
          .then(data => {
            setData(data);
            console.log(data);
            setLoading(false);
            console.log(data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            setError(error);
            setLoading(false);
          }, [])
    }, [])

    if(loading) {
        return <div>Loading page ...</div>;
    }

    if(error) {
        return <div>Error : {error.message}</div>
    }


    return (
        <div className='flex flex-col w-full
        content-center 
        align-center
        items-center
        min-h-[calc(100vh-4rem)]
        px-6
        my-2
         '>
          <h1 className='mb-2 text-center text-5xl font-extrabold 
            leading-none tracking-tight text-sky-900
            md:text-5xl lg:text-5xl dark:text-white
            '>{data.title}</h1>
          <img className="object-cover my-4 max-w-96
            relative mx-3 mt-3 flex overflow-hidden rounded-xl"
            src={`https://picsum.photos/450/600/?${data.id}`} alt="product image" />
          <h2 className='w-full flex flex-row flex-nowrap items-center mt-8 mb-2'>
            <span className='w-16 block border-b border-slate-900'></span>
            <span className='flex-none block  pb-1 px-4 border-x-2 border-y rounded border-slate-900
              text-2xl font-semibold leading-none text-slate-900
              '>Details</span>
            <span className='flex-grow block border-b border-slate-900'></span>
          </h2>
          {/* <div id='book-details' className=' text-center'>
            <p>Written by <span className='font-bold'>{data.author}</span></p>
            <p>Published in {format(data.published_date,'MMMM dd,yyyy')}</p>
            <p>Added in BR in {format(data.added,'MMMM dd,yyyy')}</p>
          </div> */}
          <table id='book-details' className='min-w-96'>
            <tbody>
            <tr className='border-b-2'>
                <td className='px-2 text-left '>Written by</td>
                <td className='px-2 text-right font-semibold'>{data.author}</td>
              </tr>
              <tr className='border-b-2'>
                <td className='px-2 text-left '>Language</td>
                <td className='px-2 text-right'>{getLanguageName(data.language)}</td>
              </tr>
              <tr className='border-b-2'>
                <td className='px-2 text-left '>Published in</td>
                <td className='px-2 text-right italic'>{format(data.published_date,'MMMM dd,yyyy')}</td>
              </tr>
              <tr className='border-b-2'>
                <td className='px-2 text-left '>Added here in</td>
                <td className='px-2 text-right italic'>{format(data.added,'MMMM dd,yyyy')}</td>
              </tr>
              <tr className=''>
                <td className='px-2 text-left '>Last update in</td>
                <td className='px-2 text-right italic'>{format(data.last_update,'MMMM dd,yyyy')}</td>
              </tr>
            </tbody>
          </table>
          <h2 className='w-full flex flex-row flex-nowrap items-center mt-8 mb-2'>
            <span className='w-16 block border-b border-slate-900'></span>
            <span className='flex-none block  pb-1 px-4 border-x-2 border-y rounded border-slate-900
              text-2xl font-semibold leading-none text-slate-900
              '>Synopsis</span>
            <span className='flex-grow block border-b border-slate-900'></span>
          </h2>
          <div id='synopsis' className='mb-4'>
            {data.overview === null && <p className='italic text-gray-500'>Synopsis is unset</p>}
            {data.overview === null && <p>{data.overview}</p>}
          </div>
        </div>
    );
}

export default Book;