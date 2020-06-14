import React from "react";

export default function Footer() {
    const textClass  = "sm:text-lg text-xs mono text-blue-900 sm:px-2 sm:pt-2";

    function a(word, link) {
        return <a href={link} target="_blank" rel="noopener noreferrer" className="underline">{word}</a>
    }
    
    return(
        <div className="mt-4 w-5/6 border-2 border-dashed border-blue-500 mx-auto flex flex-col px-2 py-2 items-center text-center">
            <p className={textClass}>
                Made with <i class="ri-heart-fill text-blue-900"></i> using {a('React', 'https://reactjs.org/')}, {a('Tailwind', 'https://tailwindcss.com/')}, {a('Node', 'https://nodejs.org/')}, {a('Express', 'https://expressjs.com/')}, {a('Mongoose', 'https://mongoosejs.com/')}, {a('Axios', 'https://github.com/axios/axios')} and several other frameworks and tools.<br />
                Find the source files and documentation on {a('GitHub', 'https://github.com/EdgeKing810/combined-js-project')} or on our own {a('Gitlab instance', 'https://repo.kinesis.games/root/db-backend-test')}!
            </p>
        </div>
    );
}