import React from "react";
import "./Contact.css"

const Contact = () => {
    return (
        <table className="social-media-table">
            <tbody>
                <tr>
                    <td>
                        <a href="https://discord.com/channels/1162823265975279636/1162823266432466975" target="_blank" rel="noopener noreferrer">
                            <img src="/discord.png" alt="Discord" className="social-icon" />
                        </a>
                    </td>
                    <td>
                        <a href="https://twitter.com/orchestra_labs" target="_blank" rel="noopener noreferrer">
                            <img src="/twitter.png" alt="Twitter" className="social-icon" />
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="https://www.linkedin.com/company/orchestra-labs/about" target="_blank" rel="noopener noreferrer">
                            <img src="/linkedin.png" alt="LinkedIn" className="social-icon" />
                        </a>
                    </td>
                    <td>
                        <a href="https://github.com/Orchestra-Labs" target="_blank" rel="noopener noreferrer">
                            <img src="/github.png" alt="GitHub" className="social-icon" />
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Contact;
