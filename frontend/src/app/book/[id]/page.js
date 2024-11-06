import { capitalizeWords } from "@/utils/stringUtils";
import AxiosInstance from "@/utils/AxiosInstance";
import Error from "@/components/Error";
import { getLanguageByAbbreviation } from "@/utils/languageUtils";
import { formatDate } from "@/utils/dateUtils";
import ReviewStars from "@/components/ReviewStars";
import Overview from "@/components/OverviewSection";

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
        min-h-mod my-10
        '>
            <h1 className="text-center text-sky-900 text-5xl font-black font-serif tracking-wide max-w-xl
            drop-shadow-modh">
              {capitalizeWords(data.title)}
            </h1> 
            <span className="w-52 h-0.5 bg-gray-100 border-0 rounded my-4 md:my-3 dark:bg-gray-700"></span>
            <div className="max-w-3xl p-4 
            flex items-center">
              <img className="mx-6 object-cover w-fit max-h-96 
              drop-shadow-mod hover:drop-shadow-modh
              hover:scale-[98%]
              rounded-xl hover:rounded-none
              transition-all ease-in duration-150" 
              src={data.coverUrl?data.coverUrl:"https://picsum.photos/400/600/?dd"} alt={data.title} />

              <div id="book-details" className="mx-3 ">
                <h1 className="mb-10"><span className="font-bold mr-1">Author </span>{capitalizeWords(data.author)}</h1>
                <h1 className="my-10"><span className="font-bold mr-1">Language </span>{getLanguageByAbbreviation(data.language.toUpperCase())}</h1>
                <h1 className="my-10"><span className="font-bold mr-1">Category </span>{capitalizeWords(data.category)}</h1>
                <h1 className="my-10 flex"><span className="font-bold mr-1">Score </span><ReviewStars score={2.5}/></h1>
                <p className="mt-10"><span className="font-bold mr-1">Publish date </span>{formatDate(data.published_date)}</p>
              </div>
            </div>
            <Overview overview={data.overview}/>
        </div>
    )
}

export default book;