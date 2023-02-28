import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function AboutModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          About
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
        Welcome to the Reverse Dictionary tool, powered by OpenAI's GPT-3 API. This tool sets a new standard in reverse dictionary functionality, with unparalleled accuracy and efficiency. Don't take our word for it - compare it with the most popular reverse dictionary on the market: <a href="https://reversedictionary.org/">reversedictionary.org</a>
        </p>

        <h4>About the developer</h4>
        <p>
        Hi there! My name is Paul Muehleip and I'm the developer behind this amazing website. If you find the tool useful, I would greatly appreciate your support:<br/> 
        <a href="https://www.linkedin.com/in/paulmuehleip/">Connect with me on LinkedIn</a><br/> 
        <a href="https://www.buymeacoffee.com/pmuehleip">Buy me a coffee</a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AboutModal;