
import {  Container, Form,  Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Rate from './Rate'

const Navb = ({rating,text,handelChange,handleRating}) => {
  
 
  const handelOnSubmit= (e) =>{
    e.preventDefault();
  } 
  return (
    <div>
        <Navbar className='nv' bg="light" expand="lg" z-index="1" >
  <Container fluid>
    <Navbar.Brand href="#"color='white'><img src="https://i0.wp.com/tvtonight.com.au/wp-content/uploads/sbsworldmovies.jpg?fit=520%2C350&ssl=1" 
    alt=""width={"80px"} /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '50px' }}
        navbarScroll
      >
        <Nav.Link  href="MovieList">Go To Movie  List</Nav.Link>
        <Nav.Link href="MovieList">Tv shows</Nav.Link>
        <NavDropdown title="Genre" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Horror</NavDropdown.Item>
          
          <NavDropdown.Item href="#action5">
            Family and Children
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Sign in
        </Nav.Link>
      </Nav>
      <Form className="d-flex" onSubmit={handelOnSubmit}>
        <input type="text" placeholder='search' value={text} onChange={handelChange}/>
       <div className='star'>
        <Rate rating={rating} handleRating={handleRating}/>
        </div>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Navb