import React from "react";

import Object from "./Object";

export default function List(props) {
    const objects = props.items.map(item => (
        <Object key={item._id} id={item._id} title={item.title} desc={item.description} deleteItem={props.deleteItem} />
    ));

    return(
        <div className="mt-4 w-5/6 border-2 border-dashed border-blue-500 mx-auto flex flex-col px-4 py-8 items-center">

            <h1 className="font-mono sm:text-3xl text-lg font-bold text-blue-900 -mt-6 mb-2 border-b-2 border-t-2 border-double border-blue-300 w-2/3 text-center">GET DATA FROM DB</h1>
            
            {objects}
        </div>
    );
}