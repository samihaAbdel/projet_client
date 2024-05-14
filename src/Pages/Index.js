import React from "react";
import "./style.css" ;
import Carousel from 'react-bootstrap/Carousel';
import DisplayPosts from "../Components/Posts/DisplayPosts";



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
                <Carousel.Item className="carousel-item">
                    <img
                        className="img"
                        src="https://res.cloudinary.com/dgs5ufh6i/image/upload/v1713222570/man-riding-bicycle_t2jerv.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="img"
                        src="https://res.cloudinary.com/dgs5ufh6i/image/upload/v1713222743/photograph_hspiaf.avif"
                        alt="third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
        <DisplayPosts/>
        <div class="footer-basic">
        <footer>
            <div class="social"><a href="/">
              <i class="icon ion-social-instagram"><ion-icon name="logo-instagram"></ion-icon></i></a>
              <a href="/"><i class="icon ion-social-snapchat"><ion-icon name="logo-snapchat"></ion-icon></i></a>
              <a href="/"><i class="icon ion-social-twitter"><ion-icon name="logo-twitter"></ion-icon></i></a>
              <a href="/"><i class="icon ion-social-facebook"><ion-icon name="logo-facebook"></ion-icon></i></a>
              </div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="/home">Home</a></li>
                <li class="list-inline-item"><a href="/service">Services</a></li>
                <li class="list-inline-item"><a href="about">About</a></li>
                <li class="list-inline-item"><a href="/about">Terms</a></li>
                <li class="list-inline-item"><a href="/about">Privacy Policy</a></li>
            </ul>
            <p class="copyright">Life Style © 2024</p>
        </footer>
    </div>   
    </div>
    )
}
export default Index;