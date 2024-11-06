import React from 'react';

const CommentSection = async(props) => {

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

    return (
        <div>
            
        </div>
    );
};

export default CommentSection;