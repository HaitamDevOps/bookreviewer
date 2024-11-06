import React from 'react';

const Overview = (props) => {
    return (
        <div id="overview" className="w-mod my-2 text-sm leading-snug	">
            <div className="w-full my-3 flex items-center text-xl font-bold text-sky-800 
            before:w-4 before:border-sky-800 before:border-b-2 before:me-2  before:pt-2
            after:flex-1 after:border-sky-800 after:border-b-2 after:ms-2 after:pt-2
            dark:text-white dark:after:border-neutral-600">Overview</div>
            <p>{props.overview}</p>
        </div>
);
};

export default Overview;