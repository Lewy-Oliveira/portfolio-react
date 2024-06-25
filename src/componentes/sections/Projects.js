import ButtonB from '../elements/ButtonB.js'
import styles from'./Projects.module.css'
import Card from '../elements/Card.js'
import projeto1 from '../../Image/cards/projeto1.png'
import projeto2 from '../../Image/cards/projeto2.png'

function Projects(){
    return(
        <div className={styles.projects} id='projects'>
            <h1>Projetos</h1>
            <p>Cards</p>
            <Card
             img={projeto1}
             title='LP- DNC' 
             tech='HTML, CSS, JS' 
             description='Desenvolvimento de tecnologias front-end com o intuido da criação de uma landpage' 
             repo ='https://github.com/Lewy-Oliveira/projeto-landing-page'
             site ='https://dapper-croissant-f9fcb6.netlify.app/'
             />
            <Card
                img={projeto2}
                title='LP- MARIA DEV' 
                tech='HTML, CSS, JS' 
                description='Desenvolvimento de tecnologias front-end com o intuido da criação de uma landpage' 
                repo ='https://marvelous-syrniki-6d8752.netlify.app/'
                site ='https://marvelous-syrniki-6d8752.netlify.app//'
            />
            <ButtonB text='Acesso ao Site' link='https://marvelous-syrniki-6d8752.netlify.app//'/>
        </div>
    )
}

export default Projects