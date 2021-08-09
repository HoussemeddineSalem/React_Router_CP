import React, { useState } from 'react';
import MovieData from '../MovieData';
import { Link, Route } from 'react-router-dom'
import { Button, Offcanvas, Container, Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './Description.css'

function Description({ match }) {
    const movieDescription = MovieData.filter((mov) => mov.id == match.params.id);
    console.log(match)
    console.log(movieDescription)



    return (
        <>

            <Offcanvas show={true} onHide={false} placement='top' name='top' className="offcanvas-style">
                <Container className="container">
                    <Row>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title><h1>{movieDescription[0].title}</h1></Offcanvas.Title>
                        </Offcanvas.Header>
                    </Row>
                    <Row>
                        <Col>

                            <Offcanvas.Body>
                                <ReactPlayer url={movieDescription[0].trailer} />

                            </Offcanvas.Body>
                        </Col>
                        <Col style={{position:'relative'}} >
                            <div className='description-layout'>
                                <div>
                                    <h2>Description</h2>
                                    <hr />
                                    <h3>{movieDescription[0].description}</h3>
                                </div>
                                <div >
                                    <Link to='/'><button>Return to Home Page</button></Link>
                                </div>



                            </div>
                        </Col>
                    </Row>
                </Container>
            </Offcanvas>
        </>
    );
}


export default Description;
