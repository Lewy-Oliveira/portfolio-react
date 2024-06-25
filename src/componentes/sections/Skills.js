import styles from './Skills.module.css'
import javascript from '../../Image/skills/javascript.svg'
import react from '../../Image/skills/react.svg'
import html from '../../Image/skills/html.svg'
import css from '../../Image/skills/css.svg'
import typescript from '../../Image/skills/typescript.svg'
function Skills(){
    return(
        <div className={styles.skill} id="skills">
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={javascript} alt='javascript'/>
                <img src={css} alt='css'/>
                <img src={react} alt='react'/>
                <img src={html} alt='html'/>
                <img src={typescript} alt='typescript'/>
            </div>
        </div>
    )
}

export default Skills