import React, { useEffect, useState } from 'react'

import './search.scss';

function Search() {


    const productName  

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    useEffect(() => {
        async function renderProductName () {
            const results = await fetch('http://localhost:2000/plants').then(response => response.json()).then(data => data)
            
            
            
            
             results.filter(product =>
                product.toLowerCase().includes(searchTerm)
            );

            setSearchResults(results);
        }
        renderProductName()
    }, []);

    return (
        <div className="header__search">
            <input
                type="text"
                placeholder="Busca"
                value={searchTerm}
                onChange={handleChange}
            />
            <ul>
                {searchResults.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>

    );
}



export default Search;
