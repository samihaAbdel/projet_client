import React from "react";
import "./style.css" ;
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


function Index() {

    return (
    <div className="home-container">
        <div className="title">
        <h1> LIFE STYLE</h1>
        <p>FEEL FREE AND POST</p>
        </div>
        <div className="publication">
            <Carousel className="carousel">
                <Carousel.Item className="carousel-item">
                    <img
                        className="img"
                        src="https://res.cloudinary.com/dgs5ufh6i/image/upload/v1713189328/photo-1572705824045-3dd0c9a47945_xmkmd6.avif"
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
        <div className="pub-card">
        <div className="pub">
        <Card className="card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://res.cloudinary.com/dgs5ufh6i/image/upload/v1713222938/360_F_650386527_PBMYsOrY1Bi5ZM3gZabMhrfIKwbNKTYy_vd8xbu.jpg" />
      <Card.Body>
        <Card.Title>HEALTH AND WELLNESS</Card.Title>
        <Card.Text>
          INVEST IN YOURSELF
        </Card.Text>
        <Button variant="primary">CLICK ME</Button>
      </Card.Body>
    </Card>
    <Card className="card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://res.cloudinary.com/dgs5ufh6i/image/upload/v1713222147/istockphoto-1495956202-612x612_cjdmsv.jpg" />
      <Card.Body>
        <Card.Title>ART AND CULTURE</Card.Title>
        <Card.Text>
        JOIN OUR COMMUNITY IN ART 
        </Card.Text>
        <Button variant="primary">WELCOME</Button>
      </Card.Body>
    </Card>
        </div>
        <div className="pub">
        <Card className="card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://res.cloudinary.com/dgs5ufh6i/image/upload/v1713222743/photograph_hspiaf.avif" />
      <Card.Body>
        <Card.Title>PHOTOGRAPHY</Card.Title>
        <Card.Text>
          SHARE YOUR BEST PICTURE WITH US
        </Card.Text>
        <Button variant="primary">WELCOME</Button>
      </Card.Body>
    </Card>
    <Card className="card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://res.cloudinary.com/dgs5ufh6i/image/upload/v1713222256/Bengaluru-home-Bodhi-Design-Studio-17-1366x768_l9yeuv.webp" />
      <Card.Body>
        <Card.Title>HOME AND DESIGN</Card.Title>
        <Card.Text>
          NEED SOME ADVICE? YOU ARE IN THE RIGHT PLACE
        </Card.Text>
        <Button variant="primary">CLICK ME</Button>
      </Card.Body>
    </Card>
        </div>
        <div className="pub">
        categorie 
        <br/>
        last update 
        <br/>
        activities 
        </div>
        <div className="pub">
        commentaire des gens 
        <br/>
        best commentaire
        </div>
        </div>
        <div className="login">
          <div className="login-out">
          <Form>
      <Form.Group className="form" controlId="formGroupEmail">
        <Form.Label className="form-title">Email address</Form.Label>
        <Form.Control className="form-type" type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="form" controlId="formGroupPassword">
        <Form.Label className="form-title">Password</Form.Label>
        <Form.Control className="form-type" type="password" placeholder="Password" />
      </Form.Group>
    </Form>
    <Button className="button" size="sm">
          LOG IN
        </Button>
    </div>
        </div>
        <footer>
          <div>
          ©Copyright
          </div>
        </footer>
    </div>
    )
}
export default Index;