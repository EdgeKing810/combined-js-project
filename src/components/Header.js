import React from "react";

export default function Header() {
    return(
        <div className="w-screen sm:h-16 h-8 flex justify-center items-center bg-blue-800">
            <a
                className="h-4/5 font-extrabold font-mono sm:text-xl text-md bg-blue-300 text-blue-900 rounded hover:bg-blue-500 sm:px-4 sm:py-2 px-2 text-center"
                href="/projects/db-backend-test/">
                    DB Backend Test
            </a>
        </div>
    );
}