import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from '../Header';
import SortAndFilter from '../SortAndFilter';
import PropertyListing from '../PropertyListing';

const App = () => {
    const [propertyList, setPropertyList] = useState();

    useEffect(() => {
        fetch('http://localhost:3000/api/properties')
            .then((res) => res.json())
            .then((data) => setPropertyList(data))
            .catch((error) => alert(error));
    }, []);

    return (
        <div className="App">
            <Header />
            <main>
                <SortAndFilter />
                <PropertyListing propertyList={propertyList} />
            </main>
        </div>
    );
};

export default App;
