import React from "react";

export default function Object(props) {
    const titleClass  = "font-bold sm:text-lg text-md mono text-blue-900 sm:px-4 px-2 sm:pt-4 pt-2"
    const descClass   = "sm:w-1/3 w-5/6 h-8 sm:px-4 px-2 sm:pt-2 mb-2 sm:text-md text-xs text-blue-900 mono";

    return(
        <div className="w-full bg-blue-300 py-2 px-4 rounded-lg my-2">
            <div className="flex justify-between">
                <div className="w-10/12">
                    <h2 className={titleClass}>{props.title}</h2>
                    <p className={descClass}>{props.desc}</p>
                </div>
                <div className="w-1/12 flex items-center justify-center text-center">
                    <button 
                            className="h-1/3 w-3/4 bg-red-500 border-2 border-red-600 mono text-xl font-bold text-blue-900"
                            onClick={() => {props.deleteItem(props.id)}}>
                                DEL
                    </button>
                </div>
            </div>
        </div>
    );
}