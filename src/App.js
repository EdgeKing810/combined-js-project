import React, {useState, useEffect} from "react";
import axios from 'axios';

import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Footer from "./components/Footer";

export default function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('https://backend.kinesis.games/test/')
             .then(response => {setItems(response.data); console.log(response.data)})
             .catch((error) => console.log(error));
    }, []);

    function addItem(data) {
        axios.post('https://backend.kinesis.games/test/add', data)
             .then(response => console.log(response.data))
             .catch((error) => console.log(error));
        setItems(prevItems => [...prevItems, data]);
    }

    function deleteItem(id) {
        axios.delete('https://backend.kinesis.games/test/' + id)
             .then(response => console.log(response.data))
             .catch((error) => console.log(error));
        setItems(items.filter(el => el._id !== id));
    }

    return(
        <div className="mb-4">
            <Header />
            <Form addItem={addItem} />
            <List items={items} deleteItem={deleteItem} />
            <Footer />
        </div>
    );
}