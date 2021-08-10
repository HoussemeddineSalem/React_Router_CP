import React from 'react';
import MovieData from '../MovieData';
import { Link } from 'react-router-dom'
import { Offcanvas, Container, Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './Description.css';


function Description({ match }) {
    const movieDescription = MovieData.filter((mov) => Number(mov.id) === Number(match.params.id));


    return (
        <>

            <Offcanvas show={true} onHide={false} placement='top' name='top' className="offcanvas-style">
                <Container className="container" >
                    <Row>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title><h1>{movieDescription[0].title}</h1></Offcanvas.Title>
                        </Offcanvas.Header>
                    </Row>
                    <Row>

                        <Col sm={7} style={{ position: 'relative' }}>
                            <div>
                                <Offcanvas.Body>
                                    <ReactPlayer url={movieDescription[0].trailer} height="320px" />
                                </Offcanvas.Body>
                            </div>
                        </Col>
                        <Col sm={5} style={{ position: 'relative' }} >
                            <div className='description-layout'>

                                <div>
                                    <h3>Description</h3>
                                    <hr />
                                    <h4>{movieDescription[0].description}</h4>
                                </div>
                                <div className='return-home-btn'>
                                    <Link to='/'>
                                        <img className='return-home-logo' src="https://image.flaticon.com/icons/png/512/846/846551.png" alt="..." />
                                    </Link>

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
