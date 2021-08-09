import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './AddMovie';
import movieAppLogo from './img/movieAppLogo.png';
import './component.css';
import ReactStars from "react-rating-stars-component";




export default function NavBar({movieName, titleSearch ,setMovieName, setTitleSearch,ratingSearch, setRatingSearch}){ 
  const handleChange = (event) => setTitleSearch(event.target.value);
  const ratingChanged = (e) => {setRatingSearch(e)}
   
    
      const refreshPage = ()=>{
        window.location.reload();
     }
  
    return (

    <Navbar className="nav-bar-styl" expand="lg" sticky="top">
             <img src ={ movieAppLogo } alt="blabla" width='200px' height='75px' />
              
                <Navbar.Brand href="#"  className="nav-bar-brand-styl">BlablaFlix</Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                      <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '50px', fontSize:'20px', marginRight:'50px' }}
                        navbarScroll
                      >
                        {/* <Nav.Link href="#action1">Home</Nav.Link>
                         <Nav.Link href="#action2">Films</Nav.Link> */}
                         
                          
                       </Nav>
                               <div style={{width:'700px' ,display:'flex', justifyContent:'space-around'}}>

                                           <Form className="d-flex">
                                            <FormControl
                                              type="search"
                                              placeholder="Place a Movie Title"
                                              className="mr-2"
                                              aria-label="Search"
                                              onChange={handleChange}
                                              style={{width :'250px'}}
                                              value={titleSearch}
                                            />
                                                
                                            </Form>
                                           <div className='rating-by-stars' style={{marginLeft:'50px', width:'500px', display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
                                                 <span><i>Search by rating</i></span>
                                           
                                                   <ReactStars
                                              
                                                     count={5}
                                                           onChange={ratingChanged}
                                                           size={20}
                                                           isHalf={false}
                                                           emptyIcon={<i className="far fa-star"></i>}
                                                           halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                           fullIcon={<i className="fa fa-star"></i>}
                                                           activeColor="#ffd700"
                                                           value={ratingSearch}
                                               
    
                                                  /> 
                                           </div>
                                           
                                              <AddMovie setMovieName={setMovieName} movieName={movieName} />
                                              <Button  variant="outline-secondary" style ={{marginLeft:'20px'}} onClick={refreshPage}>Reset</Button>
                                           
                                </div>
                    </Navbar.Collapse>
                                
  
    </Navbar>

        

    )

}




