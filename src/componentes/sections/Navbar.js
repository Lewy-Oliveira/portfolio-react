import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'
function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#projects'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://www.instagram.com/lewy_oliveira_informatica?igsh=MWx6eTk3dHhoMGI1YQ=='><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/Lewy-Oliveira'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/lewy-oliveira-1b569b232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><FaLinkedin size={30}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar