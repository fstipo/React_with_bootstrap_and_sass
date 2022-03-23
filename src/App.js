import './App.scss';
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import './Styles/Variables/Varibales.scss';

function App() {
  return (
    <Container className="text-center pt-5">
      <Navbar className="color-white" />
      <h1 className="m-4">React with Bootstrap and Sass</h1>
      <Button variant="secondary">Click Me</Button>
    </Container>
  );
}

export default App;
