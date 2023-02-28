import { useState, useEffect } from 'react';
import { SearchTermForm } from "./SearchTermForm";
import { ErrorMessage } from "./ErrorMessage";
import { SearchTermDisplay } from "./SearchTermDisplay";
import { LoadingDisplay } from "./LoadingDisplay";
import { Header } from "./Header";
import { getDefinition } from "../requests/requests";
import "../App.css";


const Homepage = () => {
  const [searchTerms, setSearchTerms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // TODO: fetch word infromation to display
  // useEffect(() => {
  //   (fetchResults)();
  // }, [searchTerms]);

  // const getDefinitions = async (word) => {
  //   let definitions = [];

  //   try {
  //     const data = await getDefinition(word);
  //     console.log(data);
  //     data[0].meanings.forEach(meaning => {
  //       let partOfSpeech = meaning.partOfSpeech;
  //       meaning.definitions.forEach(definition => {
  //         let def = definition.definition;
  //         let example = definition.example;
  //         definitions.push({"partOfSpeech": partOfSpeech, "definition": def, "example": example})
  //       })
  //     });
  //     return definitions;
  //   } catch (err) {
  //     console.log(err);
  //     return [];
  //   }
  // };

  return (
    <div>
      <Header/>
      <div className='vertical-center'>
        <div>
          <h1><span className='colorful-text'>Find</span> that word you are looking for...</h1>
          <div><i>A.I. Powered by GPT-3</i></div>
          <br/>
          <br/>
          <SearchTermForm setLoading={setLoading} setError={setError} setSearchTermItems={setSearchTerms}/>
          <br/>
          <ErrorMessage message={error}/>
          {
            loading 
            ? <LoadingDisplay></LoadingDisplay> 
            : <SearchTermDisplay searchTerms={searchTerms}/>
          }
        </div>
      </div>
    </div>
  );
};

export default Homepage;