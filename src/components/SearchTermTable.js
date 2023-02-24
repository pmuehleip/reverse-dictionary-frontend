import { Table } from 'react-bootstrap';


export function SearchTermTable({SearchTermItems}) {

  return (
    <div>
      <Table striped>
        <tbody>
          {
          SearchTermItems.map((result) => (
            <tr key={result}>
                <td>{result}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SearchTermTable;