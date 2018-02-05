import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB6OyZ5UC1TkN_K7hwJ_8rHNmFxD2glrVQ';

const App = () => {
    return ( 
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));