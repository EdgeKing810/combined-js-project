import React, {useState, useEffect} from "react";
import axios from 'axios';

import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get('http://backend.kinesis.games/test/')
          .then(response => {setItems(response.data); console.log(response.data)})
          .catch((error) => {console.log(error);})
        // eslint-disable-next-line
    }, [count]);

    function deleteItem(id) {
        axios.delete('http://backend.kinesis.games/test/' + id)
             .then(response => console.log(response.data));
        setItems(items.filter(el => el._id !== id));
    }

    return(
        <div className="w-screen h-screen mb-4">
            <Header />
            <Form setCount={setCount} />
            <List items={items} deleteItem={deleteItem} />
        </div>
    );
}