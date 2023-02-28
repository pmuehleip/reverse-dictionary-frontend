import Spinner from 'react-bootstrap/Spinner';

export function LoadingDisplay() {
  return (
    <div>
        <Spinner animation="border" />
        <p>Loading...</p>
    </div>
  )
}

export default LoadingDisplay;