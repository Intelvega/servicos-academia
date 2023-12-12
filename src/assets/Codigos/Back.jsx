import style from './Back.module.css'
import CorpoS from './CorpoS'
import Servicos from './Servicos'
import Carrossel from './ControlledCarousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Profissional from './Profissional';


export default ()=> {


    return(
        <div>
            
        <Servicos></Servicos>
        <CorpoS></CorpoS>
        <Profissional></Profissional> 
        <Carrossel></Carrossel>
        <Footer></Footer>

        </div>
    )
}