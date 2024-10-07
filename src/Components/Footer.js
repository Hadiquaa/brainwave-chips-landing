import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container container grid">
                <a href="#" className="footer-logo"> CHIPS</a>
                <div className="footer-content grid">
                    <a href="#" className="footer-link">Terms & Agreements</a>
                    <a href="#" className="footer-link">Privacy Policy</a>
                    <div className="footer-copy">

                        <p>&copy; All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;