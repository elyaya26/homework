import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
    const [facts, setFacts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://meowfacts.herokuapp.com/?count=3');
                const data = await response.json();
                setFacts(data.data);
                console.log(data.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container">
            <h1>Cat Facts</h1>

            <ul>
                {facts.map((fact, index) => {
                    return (
                        <li key={index}>
                            {fact}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default App;
