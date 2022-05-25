
import {  Container, Form,  Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Rate from './Rate'

const Navb = ({rating,search,handelChange,handleRating}) => {
  
 
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
        <Nav.Link  href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Tv shows</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">My List</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Movies</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Sign in
        </Nav.Link>
      </Nav>
      <Form className="d-flex" onSubmit={handelOnSubmit}>
        <input type="text" placeholder='search' value={search} onChange={handelChange}/>
       
        
      </Form>
      <Rate rating={rating} handleRating={handleRating}/>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Navb