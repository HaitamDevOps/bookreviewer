import Image from "next/image";
import { capitalizeWords } from "@/utils/stringUtils";
import AxiosInstance from "@/utils/AxiosInstance";
import Error from "@/components/Error";

const book = async({params}) => {

    let data, error;
    try{
      const response = await AxiosInstance.get('/book/'+String(params.id));
      data = response.data;
    } catch (err) {
      console.error("Error fetching data:", err);
      error = "An error occurred while fetching data. Details : "+err;
    }
  
    if (error) {
      return (
        <Error error={error}/>
      )
    }
  

    return(
        <div className='flex flex-col 
        content-center items-center flex-wrap
        min-h-[calc(100vh)] py-4
        '>
            <h1 className="text-center text-slate-800 text-5xl font-black font-serif tracking-wide max-w-xl">
              {capitalizeWords(data.title)}
            </h1> 
            <span className="w-52 h-0.5 bg-gray-100 border-0 rounded my-4 md:my-3 dark:bg-gray-700"></span>
            <img className="object-cover w-fit h-[500px]" src={"https://picsum.photos/300/500/?dd"} alt="product image" />
        </div>
    )
}

export default book;