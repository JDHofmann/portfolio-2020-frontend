import React from 'react'

const Footer = () => {
    return (
        <footer className="dark footer" >
            <div className="outter footer-grid">
                <h2>Contact JD</h2>
                <a target="_blank" href="https://jdbrewerhofmann.medium.com/"><i class="fab fa-medium"></i>Medium</a>
                <a target="_blank" href="https://github.com/JDHofmann"><i class="fab fa-github"></i>GitHub</a>
                <a 
                    className="email"
                    target="_blank" href="email:jdbrewerhofmann@gmail.com"><i class="fas fa-envelope"></i>jdbrewerhofmann@gmail.com</a>
            </div>
        </footer>
    )
}
export default Footer