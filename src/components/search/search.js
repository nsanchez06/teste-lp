import React from 'react'

import './search.scss';




function Search() {


    const productName = [
        "produto 1",
        "produto 2",
        "produto 3",
        "produto 4",
        "produto 5",
        "produto 6",
        "produto 7"
    ];

    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    React.useEffect(() => {
        const results = productName.filter(product =>
            product.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);

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
