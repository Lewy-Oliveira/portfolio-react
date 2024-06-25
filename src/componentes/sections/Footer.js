import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/lewy_oliveira_informatica?igsh=MWx6eTk3dHhoMGI1YQ=='><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/Lewy-Oliveira'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/lewy-oliveira-1b569b232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><FaLinkedin size={30}/></a></li>
            </ul>
            <p>deblpmo@gmail.com</p>
            <p>Desenvolvido por Lewy Oliveira &copy; 2023</p>
        </div>
    )
}

export default Footer