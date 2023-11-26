import React from "react";

const Contact = () => {
    // twitter, discord, linkedin, and email
    return (
        <table class="social-media-table">
            <tr>
                <td>
                    <a href="https://facebook.com" target="_blank">
                        <img src="path-to-facebook-icon.png" alt="Facebook" />
                    </a>
                </td>
                <td>
                    <a href="https://twitter.com" target="_blank">
                        <img src="path-to-twitter-icon.png" alt="Twitter" />
                    </a>
                </td>
            </tr>
            <tr>
                <td>
                    <a href="https://instagram.com" target="_blank">
                        <img src="path-to-instagram-icon.png" alt="Instagram" />
                    </a>
                </td>
                <td>
                    <a href="https://linkedin.com" target="_blank">
                        <img src="path-to-linkedin-icon.png" alt="LinkedIn" />
                    </a>
                </td>
            </tr>
        </table>
    );
};

export default Contact;
