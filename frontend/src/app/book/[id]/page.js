import Image from "next/image";
import AxiosInstance from "@/utils/AxiosInstance";
import Error from "@/components/Error";

const book = async({params}) => {

    let data, error;
    try{
      const response = await AxiosInstance.get('/book');
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
        <div className='flex flex-row 
        content-start justify-center flex-wrap
        min-h-[calc(100vh)] bg-gray-600 p-2
        '>
            <h1>{}</h1> 
        </div>
    )
}

export default book;