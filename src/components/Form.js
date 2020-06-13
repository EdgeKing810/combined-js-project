import React, {useState} from "react";
import axios from 'axios';

export default function Form(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const textClasses  = "font-bold sm:text-lg text-md mono text-blue-900 ml-2 text-center"
    const inputClasses = "rounded border-2 border-blue-800 focus:border-blue-900 sm:w-1/3 w-5/6 h-8 p-4 mb-2 sm:text-md text-xs";

    const onSubmit = e => {
        e.preventDefault();
        const updatedTest = {
            title: title,
            description: desc
        };
        axios.post('http://backend.kinesis.games/test/add', updatedTest).then(res => {console.log(res.data); props.setCount(prev => prev += 1)});
    }

    return(
        <form className="mt-4 w-5/6 border-2 border-dashed border-blue-500 mx-auto flex flex-col px-4 py-8 items-center" onSubmit={e => onSubmit(e)}>

            <h1 className="font-mono sm:text-3xl text-lg font-bold text-blue-900 -mt-6 mb-2 border-b-2 border-t-2 border-double border-blue-300 w-2/3 text-center">POST DATA TO DB</h1>
            
            <h2 className={textClasses}>Enter a Title</h2>
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder=""
                className={inputClasses}
            />

            <h2 className={textClasses}>Enter a Description</h2>
            <textarea
                value={desc}
                onChange={e => setDesc(e.target.value)}
                placeholder=""
                className={`${inputClasses} h-40`}
            />

            <button
                className="py-2 px-4 font-extrabold bg-blue-800 text-blue-300 hover:bg-blue-900 hover:text-blue-200 -mb-4 mt-2 rounded">
                    SUBMIT
            </button>
            
        </form>
    );
}