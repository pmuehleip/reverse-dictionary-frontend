import { useState, useEffect } from 'react';
import { SearchTermForm } from "./SearchTermForm";
import { ErrorMessage } from "./ErrorMessage";
import { SearchTermDisplay } from "./SearchTermDisplay";
import Image from 'react-bootstrap/Image';
import magnifyGlassPNG from '../static/magnify-glass.png'; 


const Homepage = () => {
  const [searchTerms, setSearchTerms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  return (
    <div>
      <h1>Reverse Dictionary</h1>
      <br/>
      <Image src={magnifyGlassPNG} width={100} height={100}></Image>
      <br/>
      <br/>
      <SearchTermForm setLoading={setLoading} setError={setError} setSearchTermItems={setSearchTerms}/>
      <br/>
      <ErrorMessage message={error}/>
      {searchTerms.length ? <SearchTermDisplay searchTerms={searchTerms}/> : <></>}
    </div>
  );
};

export default Homepage;