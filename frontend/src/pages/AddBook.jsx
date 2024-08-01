import React, { useState } from 'react';

function AddBook() {
    const url = "http://127.0.0.1:8000/api/book/";
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        language: '',
        publishDate: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form Data Submitted: ', formData);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "title":formData.title,
                "author":formData.author,
                "language":formData.language,
                "published_date":formData.publishDate
            })
        }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
        setFormData((prevState) => ({
            ...prevState,
            title:"",
            author:"",
            language:"",
            publishDate:""
        }));
    };

    return (
        <form onSubmit={handleSubmit}
          className='flex flex-col
          content-start justify-center flex-wrap
          min-h-[calc(100vh-4rem)]
          max-w-sm mx-auto
        '>
            <div className='relative z-0 w-full mb-5 group'>
                <label 
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  htmlFor="title">Title
                </label>
                <div className='flex'>
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path xmlns="http://www.w3.org/2000/svg" d="M22,3H10C8.9,3,8,3.9,8,5v22.6c0,0.8,0.5,1.5,1.2,1.8c0.8,0.3,1.6,0.1,2.2-0.4l4.6-4.6l4.6,4.6c0.4,0.4,0.9,0.6,1.4,0.6  c0.3,0,0.5,0,0.8-0.2c0.8-0.3,1.2-1,1.2-1.8V5C24,3.9,23.1,3,22,3z"/>
                        </svg>
                    </span>
                    <input
                      className='rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                </div>
            </div>
            <div className='relative z-0 w-full mb-5 group'>
                <label 
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  htmlFor="author">Author</label>
                <div className='flex'>
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                        </svg>
                    </span>
                    <input
                      className='rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      type="text"
                      id="author"
                      name="author"
                      value={formData.author}
                      onChange={handleChange}
                      required
                    />
                </div>
            </div>
            <div className='relative z-0 w-full mb-5 group'>
                <label 
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  htmlFor="language">Language</label>
                <div className='flex'>
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path xmlns="http://www.w3.org/2000/svg" d="M20.58 19.37L17.59 11.01C17.38 10.46 16.91 10.12 16.37 10.12C15.83 10.12 15.37 10.46 15.14 11.03L12.16 19.37C12.02 19.76 12.22 20.19 12.61 20.33C13 20.47 13.43 20.27 13.57 19.88L14.19 18.15H18.54L19.16 19.88C19.27 20.19 19.56 20.38 19.87 20.38C19.95 20.38 20.04 20.37 20.12 20.34C20.51 20.2 20.71 19.77 20.57 19.38L20.58 19.37ZM14.74 16.64L16.38 12.05L18.02 16.64H14.74ZM12.19 7.85C9.92999 11.42 7.89 13.58 5.41 15.02C5.29 15.09 5.16 15.12 5.04 15.12C4.78 15.12 4.53 14.99 4.39 14.75C4.18 14.39 4.3 13.93 4.66 13.73C6.75999 12.51 8.48 10.76 10.41 7.86H4.12C3.71 7.86 3.37 7.52 3.37 7.11C3.37 6.7 3.71 6.36 4.12 6.36H7.87V4.38C7.87 3.97 8.21 3.63 8.62 3.63C9.02999 3.63 9.37 3.97 9.37 4.38V6.36H13.12C13.53 6.36 13.87 6.7 13.87 7.11C13.87 7.52 13.53 7.86 13.12 7.86H12.18L12.19 7.85ZM12.23 15.12C12.1 15.12 11.97 15.09 11.85 15.02C11.2 14.64 10.57 14.22 9.97999 13.78C9.64999 13.53 9.58 13.06 9.83 12.73C10.08 12.4 10.55 12.33 10.88 12.58C11.42 12.99 12.01 13.37 12.61 13.72C12.97 13.93 13.09 14.39 12.88 14.75C12.74 14.99 12.49 15.12 12.23 15.12Z" fill="currentColor"/>
                        </svg>
                    </span>
                    <select
                      className='rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      type="text"
                      id="language"
                      name="language"
                      value={formData.language}
                      onChange={handleChange}
                      required
                    >
                        <option value="SQ">Albanian</option>
                        <option value="AR">Arabic</option>
                        <option value="HY">Armenian</option>
                        <option value="EU">Basque</option>
                        <option value="BN">Bengali</option>
                        <option value="BG">Bulgarian</option>
                        <option value="CA">Catalan</option>
                        <option value="KM">Cambodian</option>
                        <option value="ZH">Chinese (Mandarin)</option>
                        <option value="HR">Croatian</option>
                        <option value="CS">Czech</option>
                        <option value="DA">Danish</option>
                        <option value="NL">Dutch</option>
                        <option value="EN">English</option>
                        <option value="ET">Estonian</option>
                        <option value="FJ">Fiji</option>
                        <option value="FI">Finnish</option>
                        <option value="FR">French</option>
                        <option value="KA">Georgian</option>
                        <option value="DE">German</option>
                        <option value="EL">Greek</option>
                        <option value="GU">Gujarati</option>
                        <option value="HE">Hebrew</option>
                        <option value="HI">Hindi</option>
                        <option value="HU">Hungarian</option>
                        <option value="IS">Icelandic</option>
                        <option value="ID">Indonesian</option>
                        <option value="GA">Irish</option>
                        <option value="IT">Italian</option>
                        <option value="JA">Japanese</option>
                        <option value="JW">Javanese</option>
                        <option value="KO">Korean</option>
                        <option value="LA">Latin</option>
                        <option value="LV">Latvian</option>
                        <option value="LT">Lithuanian</option>
                        <option value="MK">Macedonian</option>
                        <option value="MS">Malay</option>
                        <option value="ML">Malayalam</option>
                        <option value="MT">Maltese</option>
                        <option value="MI">Maori</option>
                        <option value="MR">Marathi</option>
                        <option value="MN">Mongolian</option>
                        <option value="NE">Nepali</option>
                        <option value="NO">Norwegian</option>
                        <option value="FA">Persian</option>
                        <option value="PL">Polish</option>
                        <option value="PT">Portuguese</option>
                        <option value="PA">Punjabi</option>
                        <option value="QU">Quechua</option>
                        <option value="RO">Romanian</option>
                        <option value="RU">Russian</option>
                        <option value="SM">Samoan</option>
                        <option value="SR">Serbian</option>
                        <option value="SK">Slovak</option>
                        <option value="SL">Slovenian</option>
                        <option value="ES">Spanish</option>
                        <option value="SW">Swahili</option>
                        <option value="SV">Swedish </option>
                        <option value="TA">Tamil</option>
                        <option value="TT">Tatar</option>
                        <option value="TE">Telugu</option>
                        <option value="TH">Thai</option>
                        <option value="BO">Tibetan</option>
                        <option value="TO">Tonga</option>
                        <option value="TR">Turkish</option>
                        <option value="UK">Ukrainian</option>
                        <option value="UR">Urdu</option>
                        <option value="UZ">Uzbek</option>
                        <option value="VI">Vietnamese</option>
                        <option value="CY">Welsh</option>
                        <option value="XH">Xhosa</option>
                    </select>
                </div>
            </div>
            <div className='relative z-0 w-full mb-5 group'>
                <label 
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  htmlFor="publishDate">Publish Date</label>
                <div className='flex'>
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" d="M4.875 11V14C4.875 16.7614 7.05761 19 9.75 19H13.65C14.9429 19 16.1829 18.4732 17.0971 17.5355C18.0114 16.5979 18.525 15.3261 18.525 14V11C18.5263 9.67351 18.0131 8.40097 17.0986 7.463C16.1841 6.52503 14.9433 5.99867 13.65 6H9.75C8.45668 5.99867 7.21595 6.52503 6.30143 7.463C5.38691 8.40097 4.87371 9.67351 4.875 11V11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path xmlns="http://www.w3.org/2000/svg" d="M8.02502 8C8.02502 8.41421 8.36081 8.75 8.77502 8.75C9.18924 8.75 9.52502 8.41421 9.52502 8H8.02502ZM9.52502 4C9.52502 3.58579 9.18924 3.25 8.77502 3.25C8.36081 3.25 8.02502 3.58579 8.02502 4H9.52502ZM13.875 8C13.875 8.41421 14.2108 8.75 14.625 8.75C15.0392 8.75 15.375 8.41421 15.375 8H13.875ZM15.375 4C15.375 3.58579 15.0392 3.25 14.625 3.25C14.2108 3.25 13.875 3.58579 13.875 4H15.375ZM12.45 10C12.45 9.58579 12.1142 9.25 11.7 9.25C11.2858 9.25 10.95 9.58579 10.95 10H12.45ZM10.95 12.5C10.95 12.9142 11.2858 13.25 11.7 13.25C12.1142 13.25 12.45 12.9142 12.45 12.5H10.95ZM12.45 12.5C12.45 12.0858 12.1142 11.75 11.7 11.75C11.2858 11.75 10.95 12.0858 10.95 12.5H12.45ZM10.95 15C10.95 15.4142 11.2858 15.75 11.7 15.75C12.1142 15.75 12.45 15.4142 12.45 15H10.95ZM11.7 13.25C12.1142 13.25 12.45 12.9142 12.45 12.5C12.45 12.0858 12.1142 11.75 11.7 11.75V13.25ZM9.26252 11.75C8.84831 11.75 8.51252 12.0858 8.51252 12.5C8.51252 12.9142 8.84831 13.25 9.26252 13.25V11.75ZM11.7 11.75C11.2858 11.75 10.95 12.0858 10.95 12.5C10.95 12.9142 11.2858 13.25 11.7 13.25V11.75ZM14.1375 13.25C14.5517 13.25 14.8875 12.9142 14.8875 12.5C14.8875 12.0858 14.5517 11.75 14.1375 11.75V13.25ZM9.52502 8V4H8.02502V8H9.52502ZM15.375 8V4H13.875V8H15.375ZM10.95 10V12.5H12.45V10H10.95ZM10.95 12.5V15H12.45V12.5H10.95ZM11.7 11.75H9.26252V13.25H11.7V11.75ZM11.7 13.25H14.1375V11.75H11.7V13.25Z" fill="currentColor"/>
                        </svg>
                    </span>
                    <input
                      className='rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1   text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      type="date"
                      id="publishDate"
                      name="publishDate"
                      value={formData.publishDate}
                      onChange={handleChange}
                      required
                    />
                </div>
            </div>
            <div className='flex flex-row-reverse'>
                <button 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 
                font-medium w-32 rounded-full text-sm px-5 py-2.5 text-center me-2 my-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="submit">Submit</button>
            </div>
        </form>
    );
}

export default AddBook;