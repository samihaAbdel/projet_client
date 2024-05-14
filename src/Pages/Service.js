import React from "react";
import './service.css'

function Service(props) {
    return (
        <div>
            <div className="card-service">
                <div className="cardservice">
                    <h2>Introduction</h2>
                    <p>Welcome to our interactive forum-magazine, where expression and discovery converge to fuel inspiration and exchange</p>
                </div>
                <div className="cardservice">
                    <h2>Publishing features</h2>
                    <p>Share your ideas, discoveries, and passions with our active community by publishing articles, discussions, and various media with just a few clicks</p>
                </div>
                <div className="cardservice">
                    <h2>Content management</h2>
                    <p>Maintain control over your content with our advanced management tools: edit, delete, and update your publications to uphold quality and relevance</p>
                </div>
                <div className="cardservice">
                    <h2>Social interaction</h2>
                    <p>Promote exchanges and connections by interacting with other members: comment, like, share, and explore new perspectives within our dynamic community</p>
                </div>
                <div className="cardservice">
                    <h2>Profile customization</h2>
                    <p>Express your identity by personalizing your profile: add information, photos, and preferences to connect with other members who share your interests</p>
                </div>
                <div className="cardservice">
                    <h2>Security and privacy</h2>
                    <p>Your security and privacy are our top priorities: we employ advanced security measures to protect your data and ensure a secure online experience</p>
                </div>
                <div className="cardservice">
                    <h2>Technical support</h2>
                    <p>Need a helping hand? Our dedicated technical support team is at your service. Reach out anytime for prompt assistance with any queries or concerns</p>
                </div>
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
export default Service;