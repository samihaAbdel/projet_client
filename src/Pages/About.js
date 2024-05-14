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
        <br/>
        JOIN US
        </Card.Text>
      </Card.Body>
    </Card>
    <div className="terms">
        Terms and Conditions
    <br/>
        Welcome to LIFE STYLE!
    <br/>
        By accessing this website, we ask you to carefully read the following terms and conditions. By using this site, you agree to be bound by these terms and conditions. If you do not agree to these terms and conditions, please do not use this site.
    <br/>
        Use of the Website
    <br/>
        This website is intended for personal and non-commercial use. Any commercial use is strictly prohibited.
        You agree not to use this website in a manner that could cause damage, interruption, or malfunction of the site.
    <br/>
        Website Content
    <br/>
        All content published on this website is the intellectual property of LIFE STYLE. You may not reproduce, distribute, or modify the content without permission.
        Links to Other Websites
    <br/>
        These terms and conditions are governed by the laws of Tunisia. Any dispute arising from the use of this website shall be subject to the exclusive jurisdiction of the competent courts of that jurisdiction.
</div>
<div className="privacy">
        Privacy Policy
    <br/>
        Your privacy is important to us. This privacy policy explains what information we collect when you use this website and how we use it.
    <br/>
        Information Collected
    <br/>
        We may collect personal information such as your name, email address, and IP address when you use this website.
        se of Information
    <br/>
        The information we collect is used to provide and improve this website, respond to your inquiries, and contact you if necessary.
        Cookies
    <br/>
        This website uses cookies to enhance your user experience. You can configure your browser to refuse all cookies or to indicate when a cookie is being sent.
        Disclosure to Third Parties
    <br/>
        We reserve the right to modify this privacy policy at any time. Changes will be effective upon posting to the website.
</div>

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

export default About;