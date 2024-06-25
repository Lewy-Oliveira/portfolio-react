import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
function Presentation(){
    return(
        <div className={styles.presentation} id="presentation">
          <p><strong>Bem-vindo ao meu portfólio</strong></p>
          <h1>Olá, eu sou Lewy Oliveira!</h1>
          <p>
            Apaixonado por tecnologia desede novo, inicei neese<br/>
            seguimento com 14 anos de idade e passei por muitas<br/>
            experiências!<br/>
            Tudo iniciou na área de manutenções depois passei a<br/> 
            entender meis a fundo os sistemas operacionais e quase<br/>
            que por osmose fui para o mundo da programação e do<br/>
            desenvolvimento.<br/>
            sou Graduado em Análise e desenvolvimento de sistemas, <br/>
            pós graduado em análise de dados e graduando em engenharia <br/>
            pós graduado em análise de dados e graduando em engenharia <br/>
            de software, ciências contábeis e ciências da computação! <br/>
          </p>
          <ButtonA link={'https://github.com/Lewy-Oliveira'} text='Conecte-se comigo!'/>
        </div>
    )
}

export default Presentation