import styles from '../styles/components/AppDescription.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';


export function AppDescription() {
    return (
        <div className={styles.container}>
            <h2>Exercite-se!</h2>

            <p>Pomo Challenge é um método eficiente para você que passa muitas horas
            na frente do computador, principalmente em tempos de Home Office e não percebe que as horas passam tão rápido.
            Criado a partir da técnica de <a href="https://pt.wikipedia.org/wiki/T%C3%A9cnica_pomodoro" target="_blank">Pomodoro</a>  de <a href="https://francescocirillo.com/" target="_blank">Francesco Cirillo</a> , este método consiste em:
             </p>
            <ul>
                <li><FontAwesomeIcon style={{ marginRight: 10, color: "#ff6347" }} icon={faCheck} />Aumentar a Produtividade;</li>
                <li><FontAwesomeIcon style={{ marginRight: 10, color: "#ff6347" }} icon={faCheck} />Reduzir o estresse;</li>
                <li><FontAwesomeIcon style={{ marginRight: 10, color: "#ff6347" }} icon={faCheck} />Desenvolver melhor o foco e concentração;</li>
                <li><FontAwesomeIcon style={{ marginRight: 10, color: "#ff6347" }} icon={faCheck} />Descontrair;</li>
                <li><FontAwesomeIcon style={{ marginRight: 10, color: "#ff6347" }} icon={faCheck} />Evitar lesões por excesso de trabalho;</li>
            </ul>
            <p>Termine o ciclo de 25 minutos para receber o desafio de atividades e subir de nível!</p>

        </div>
    )
}