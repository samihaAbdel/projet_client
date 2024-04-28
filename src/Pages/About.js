import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './about.css'

function About(props) {

    return (
        <div className="aboutpage">
            <Card className="text-center">
      <Card.Body>
        <Card.Title className="title-center"> WELCOME TO OUR WEBSITE "LIFE STYLE"</Card.Title>
        <Card.Text className="p-center">
        Our website where you can express yourself freely and share what you love! Whether you're passionate about art, culture, food, photography, or any other interest, you can choose your topic and publish your content here.
        Join us now and embark on a journey of creativity and exploration. Sign up today to start sharing your passions with our community. We hope you enjoy your experience on our platform!
        Let your voice be heard and your creativity shine. Sign up now and become part of our vibrant community of creators and enthusiasts. 
        <br/>
        Your journey starts here!
        </Card.Text>
        <Button variant="danger">JOIN US</Button>
      </Card.Body>
    </Card>
    <footer>
          <div>
          ©Copyright
          </div>
        </footer>
        </div>
        
    )
}

export default About;