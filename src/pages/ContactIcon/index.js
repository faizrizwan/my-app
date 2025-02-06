import { FaFacebook, FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";

import './styles.css'
export default function IconContact() {
    return (
        <ul className="social-list">
            <li className="top-li" style={{ borderTopRightRadius: '10px', borderTopLeftRadius: '-10px' }}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="icon facebook" />

                </a>
            </li>
            <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="icon youtube" />

                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/rizwanfaiz_/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="icon instagram" />

                </a>
            </li>
            <li style={{ borderBottomRightRadius: '10px' }}>
                <a href="https://github.com/faizrizwan?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon github" />

                </a>
            </li>
        </ul>
    )
}