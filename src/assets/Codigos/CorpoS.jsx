import style from './CorpoS.module.css'
import ti from './Img/ti.png'
import Button from 'react-bootstrap/Button';

export default ()=>{



    return(
        <div className={style.CorpoS}>
            <div className={style.CorpoS2} >

                <h1>Corpo mais saudável e definido</h1>
                <a href="https://www.instagram.com/tiago.dam/" target="_blank" ><Button variant="light">Entrar em contato</Button>{' '}</a>
            
                <div className={style.txtCards} >

                    <div>
                        <h2>
                        A Educação Física e a contratação de um Personal Trainer oferecem diversos benefícios para a saúde e o bem-estar geral. Aqui estão alguns dos benefícios associados a essas práticas:
                        </h2>

                        <h2>Benefícios da Educação Física:</h2>
                    </div>

                </div>


                <div className={style.cards}>

                    
                        <div><strong>Melhora da Saúde Cardiovascular:</strong> Atividades físicas regulares ajudam a fortalecer o coração, melhorar a circulação sanguínea e reduzir o risco de doenças cardiovasculares.</div>
                        
                        <div> <strong> Controle de Peso:</strong> A prática regular de exercícios físicos é fundamental para o controle do peso, ajudando na perda de peso ou na manutenção de um peso saudável.</div>
                    
                        <div> <strong> Aumento da Força e Resistência Muscular:</strong> Exercícios de resistência e treinamento de força contribuem para o desenvolvimento muscular, promovendo maior resistência e funcionalidade.</div>
                        
                        <div> <strong>Melhora da Saúde Mental:</strong> A atividade física libera endorfinas, neurotransmissores que contribuem para o bom humor e redução do estresse, ansiedade e depressão</div>
                    
                        <div> <strong> Melhora da Flexibilidade e Coordenação:</strong> Práticas como alongamento e exercícios que envolvem coordenação motora contribuem para a flexibilidade e aprimoramento das habilidades motoras.</div>
                    
                        <div> <strong> Prevenção de Doenças:</strong> A atividade física regular está associada à redução do risco de várias doenças, como diabetes tipo 2, osteoporose e certos tipos de câncer.</div>

                </div>
                 
            </div>

            <div className={style.ti}>
                <img src={ti} alt="" />
            </div>

            
        </div>
    )
}