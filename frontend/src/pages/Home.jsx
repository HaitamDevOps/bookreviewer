import React, { useState, useEffect } from 'react';
import Card from '../components/Card.jsx';


function Home() {
    const url = "http://localhost:8000/api/book/";
    // const url = process.env.REACT_APP_API_URL || "http://localhost:8000/api/book/";
    // const url = process.env.REACT_APP_API_URL;

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
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
        <div className='flex flex-row 
         content-start justify-center flex-wrap
         min-h-[calc(100vh)]
          '>
            {
                data.map(book => (
                    <Card key= {book.id}
                      id= {book.id}
                      title={book.title}
                      author={book.author}
                      language={book.language}
                      img={`https://picsum.photos/500/400/?${book.id}`} />
                ))
            }
        </div>
    );
}

export default Home;