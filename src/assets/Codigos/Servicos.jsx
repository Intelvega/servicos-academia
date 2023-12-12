import style from './Servicos.module.css'
import slogan from './Img/slogan.png'
import { FaDumbbell } from 'react-icons/fa';
import { MdFitnessCenter } from 'react-icons/md';
import { MdOutlineAccessibility } from "react-icons/md";
import { MdOutlineDirectionsWalk } from "react-icons/md";
import { MdBook } from 'react-icons/md';
import { FaSkating } from "react-icons/fa";


export default ()=>{


    return(
        <div className={style.conteudo} >
            <div className={style.slogan} >
                <img src={slogan} alt="" />
            </div>
            

            <div className={style.title}>
                <h1>Serviços de educação física</h1>
            </div>
            
            <div className={style.caixa} >
                
                <div>
                    <FaDumbbell size={40} />
                    <h3>Personal</h3>
                </div>

                <div>
                    <MdFitnessCenter size={40} />
                    <h3>Avaliação física</h3>
                </div>

                <div>
                    <MdOutlineAccessibility size={40}/>
                    <h3>Prescrição de exercícios</h3>
                </div>

                <div className={style.caixaVermelha} >
                    <MdOutlineDirectionsWalk size={40}/>
                    <h3>Reabilitação</h3>
                </div>

                <div className={style.caixaVermelha} >
                    <MdBook size={40} />
                    <h3>Prescrição de lesões</h3>
                </div>

                <div className={style.caixaVermelha} >
                    <FaSkating size={40} />
                    <h3>Treinamento Esportivo</h3>
                </div>
            
            </div>
        </div>
    )
}