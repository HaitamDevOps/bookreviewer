// import { useEffect, useState } from "react";
import Card from "@/components/Card";
import Error from "@/components/Error";
import AxiosInstance from "@/utils/AxiosInstance";

const app = async() => {

  let data, error;
  try{
    const response = await AxiosInstance.get('/book');
    data = response.data;
  } catch (err) {
    console.error("Error fetching data:", err);
    error = "An error occurred while fetching data. Details : "+err;
  }

  if (error) {
    return(
      <Error error={error}/>
    )
  }

  return (
    <div className='flex flex-row 
    content-start justify-center flex-wrap
    min-h-[calc(100vh)]
     '>
      {
        data.map((book)=>(

      <Card key= {book.id}
        id= {book.id}
        title= {book.title}
        author= {book.author}
        language= {book.language}
        img={`https://picsum.photos/500/400/?dd`} />

        ))
      }
      {/* <Card id= {books.id}
        title= {books.title}
        author= {books.author}
        language= {books.language}
        img={`https://picsum.photos/500/400/?dd`} /> */}

    </div>
  );
}


export default app;