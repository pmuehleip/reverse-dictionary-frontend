import { useState } from 'react';
import { postSearch } from "../requests/requests";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export function SearchTermForm({setLoading, setError, setSearchTermItems }) {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
    
        try {
          const data = await postSearch(searchTerm);
          setSearchTermItems(data);
          setLoading(false);
          if (data.error) {
            setError(data.error);
          }
        } catch (err) {
          setLoading(false);
          setError(err.message);
          console.log(err);
        }
      };

    return (
        <div>
        <Form onSubmit={handleSubmit}>
            <Row className="justify-content-md-center">
                <Col md={5}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/* <Form.Label>Find a Word</Form.Label> */}
                        <Form.Control type="text" placeholder="Enter a definition or meaning" required value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                        <Form.Text className="text-muted">
                        Find a Word
                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-md-center" md={5}>
              <Col md={5}>
                <Button variant="primary" type="submit">Find</Button>
              </Col>
            </Row>
        </Form>
        </div>
    );
}

export default SearchTermForm;
