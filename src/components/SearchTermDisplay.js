import { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import { SearchTermTable } from "./SearchTermTable";

export function SearchTermDisplay({ searchTerms }) {

    useEffect(() => {
        (() => !isObjectEmpty(searchTerms) ? setShow(true) : setShow(false))();
      }, [searchTerms]);

    const [show, setShow] = useState(false);

    let onClose = () => {
        setShow(false);
    }

    return (
        <div>
            <h2>Words</h2>
            <SearchTermTable SearchTermItems={searchTerms}/>
        </div>
    );
}

function isObjectEmpty(value) {
    return JSON.stringify(value) === '{}';
}
  

export default SearchTermDisplay;
