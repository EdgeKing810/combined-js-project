import React from "react";

export default function Object(props) {
    const titleClass  = "font-bold sm:text-xl text-md mono text-blue-900 sm:px-4 px-2 sm:pt-4 pt-2";
    const descClass   = "w-full h-auto sm:px-4 px-2 sm:pt-2 mb-2 sm:text-lg text-xs text-blue-900 mono";

    return(
        <div className="w-full bg-blue-300 py-2 px-4 rounded-lg mt-2">
            <div className="flex justify-between">
                <div className="sm:w-10/12 w-3/4">
                    <h2 className={titleClass}>{props.title}</h2>
                    <p className={descClass}>{props.desc}</p>
                </div>
                <div className="sm:w-1/12 w-1/6 flex items-center justify-center text-center">
                    <button 
                            className="h-1/3 sm:w-3/4 w-full bg-red-400 border-2 border-red-500 mono sm:text-xl text-sm font-bold text-blue-900"
                            onClick={() => {props.deleteItem(props.id)}}>
                                DEL
                    </button>
                </div>
            </div>
        </div>
    );
}