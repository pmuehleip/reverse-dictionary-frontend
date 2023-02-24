import { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';


export function ErrorMessage({ message }) {

    useEffect(() => {
        (() => message ? setShow(true) : setShow(false))();
      }, [message]);

    const [show, setShow] = useState(false);

    return (
        <>
        {show 
            ? 
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Error</Alert.Heading>
                <p>{message}</p>
            </Alert> 
            : <div></div>
        
        }
    </>
    );
}

export default ErrorMessage;
