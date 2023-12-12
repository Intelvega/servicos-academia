import style from './Profissional.module.css'
import ti from './Img/ti.png'


export default ()=>{


    return(
        <div className={style.profissional} >

                <div>
                    <h1>O profissional</h1>
                    <p>"Oi, sou Tiago Damasceno Daniel, educador físico dedicado a 
                        potencializar sua jornada de bem-estar. Constantemente em busca 
                        de novos conhecimentos para aprimorar minha prática, estou aqui 
                        para personalizar seus treinos e te guiar na conquista dos seus 
                        objetivos. Pronto para começar? Contrate meus serviços e vamos 
                        juntos rumo a uma vida mais saudável e ativa!"
                    </p>
                </div>

                <img src={ti} alt="" />

        </div>
    )
}