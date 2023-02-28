import { SearchTermTable } from "./SearchTermTable";

export function SearchTermDisplay({ searchTerms }) {
    if (searchTerms.length) {
        return (
            <div>
                <h2>Words</h2>
                <SearchTermTable SearchTermItems={searchTerms}/>
            </div>
        );
    }
}
  

export default SearchTermDisplay;
