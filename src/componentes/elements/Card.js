import styles from './Card.module.css'

import ButtonB from '../elements/ButtonB.js'
function Card({img, title, tech, description, repo, site}) {
    return(
        <div className={styles.card}>
            <a href={site}>
                <img src={img} alt='erro'/>
            </a>
           
            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologia:</strong>{tech}</p>
                <p>{description}</p>
                <ButtonB text='conetcte-se ao repositório' link={repo}></ButtonB>
            </section>
        </div>
    )
}

export default Card