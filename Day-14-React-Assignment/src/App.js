import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import AddEmployee from './Components/AddEmployee';
import ViewEmployees from './Components/ViewEmployees';
import DeleteEmployees from './Components/DeleteEmployees';
import Header from './Components/Header';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from './Components/SideBar';
import SearchEmployee from './Components/SearchEmployee';


function App() {
 
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Container>
          <Row>
            <Col lg={2} md={2} sm={3}>
              <SideBar />
            </Col>
            <Col>
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/add-emp' element={<AddEmployee />} />
                <Route path='/view-emp' element={<ViewEmployees  />} />
                <Route path='/delete-emp' element={<DeleteEmployees  />} />
                <Route path='/search-emp' element={<SearchEmployee  />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;