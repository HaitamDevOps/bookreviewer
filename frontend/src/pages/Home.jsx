import React, { useState, useEffect } from 'react';
import Card from '../components/Card.jsx';


function Home() {
    const url = "./_example-listbook.json";

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
          .then(response => {
            if(!response.ok){
                console.log("No network response !");
                throw new Error("No network response !");
            }
            return response.json();
          })
          .then(data => {
            setData(data);
            setLoading(false);
            console.log(data);
          })
        //   .catch(error => {
        //     setError(error);
        //     setLoading(false);
        //   })
    })

    if(loading) {
        return <div>Loading page ...</div>;
    }

    if(error) {
        return <div>Error : {error.message}</div>
    }

    return (
        <div className='flex flex-row 
         content-start justify-center flex-wrap
         min-h-[calc(150vh)]
          '>
            {
                data.results.map(book => (
                    <Card title={book.title}
                      author={book.author}
                      language={book.language}
                      img={book.img} />
                ))
            }
        </div>
    );
}

export default Home;