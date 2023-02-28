import { useState, useEffect } from 'react';
import { SearchTermForm } from "./SearchTermForm";
import { ErrorMessage } from "./ErrorMessage";
import { SearchTermDisplay } from "./SearchTermDisplay";
import { LoadingDisplay } from "./LoadingDisplay";
import { Header } from "./Header";
import Image from 'react-bootstrap/Image';
import magnifyGlassPNG from '../static/magnify-glass.png'; 
import { getDefinition } from "../requests/requests";


const Homepage = () => {
  const [searchTerms, setSearchTerms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // useEffect(() => {
  //   (fetchResults)();
  // }, [searchTerms]);

  const getDefinitions = async (word) => {
    let definitions = [];

    try {
      const data = await getDefinition(word);
      console.log(data);
      data[0].meanings.forEach(meaning => {
        let partOfSpeech = meaning.partOfSpeech;
        meaning.definitions.forEach(definition => {
          let def = definition.definition;
          let example = definition.example;
          definitions.push({"partOfSpeech": partOfSpeech, "definition": def, "example": example})
        })
      });
      return definitions;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  

  return (
    <div style={{fontFamily: "Open Sans Extrabold"}}>
      <Header/>

      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: '80vh',
        width: "100%"
      }}>
        <div>
          <h1>Find that word you are looking for...</h1>
          <div>A.I. Powered by GPT-3</div>
          <br/>
          {/* <Image src={magnifyGlassPNG} width={100} height={100} onClick={async ()=> {console.log(await getDefinitions("people"))}}></Image> */}
          <br/>
          <SearchTermForm setLoading={setLoading} setError={setError} setSearchTermItems={setSearchTerms}/>
          <br/>
          <ErrorMessage message={error}/>
          {
            loading 
            ? <LoadingDisplay></LoadingDisplay>
            : searchTerms.length ? <SearchTermDisplay searchTerms={searchTerms}/> : <></>
          }
        </div>
      </div>

    </div>
  );
};

export default Homepage;