import Card from "@/components/Card";

export default async function Home() {
  const url = "http://backend:8000/api/book/";


  let data = null;
  let error = null;

  try {
    const response = await fetch(url)

    if (!response.ok) {
      if(response.status===404){
        error = "Data not found !";
      } else {
        error = `An error occurred: ${response.statusText}`
        console.error(error)
      }
    } else {
      data = await response.json();
      console.log(data);
    }
  } catch (err) {
    // Handle network errors or unexpected issues
    error = `An unexpected error occurred: ${err.message}`;
  }

  if(error){
    return <h2>Error : {error}</h2>
  }

  return (
    <div className='flex flex-row 
         content-start justify-center flex-wrap
         min-h-[calc(100vh)]
          '>
      {data.map(book => (
          <Card key= {book.id}
            id= {book.id}
            title={book.title}
            author={book.author}
            language={book.language}
            img={`https://picsum.photos/500/400/?${book.id}`} />
      ))}
    </div>
  );
}
