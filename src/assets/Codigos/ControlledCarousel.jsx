import Carousel from 'react-bootstrap/Carousel';
import aca from './Img/aca1.jpg';
import aca2 from './Img/aca2.jpg';
import aca3 from './Img/aca3.jpg';
import resu1 from './Img/resu1.png'
import resu2 from './Img/resu2.png'
import resu3 from './Img/resu3.png'
import style from './ControlledCarousel.module.css'

function DarkVariantExample() {
  return (
    <div style={{backgroundColor: 'black', }} >
    
    <div className={style.ultrapasse} >
      <h1>Resultados</h1>
    </div>
    

    <Carousel theme="dark" style={{ maxWidth: '1400px', margin: 'auto', padding: '20px' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={resu1}
          alt="primeiro"
          style={{ maxHeight: '700px', objectFit: 'contain' }}
        />
        <Carousel.Caption>
          <h5>Treine</h5>
          <p>Supere os desafios</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={resu2}
          alt="segundo"
          style={{ maxHeight: '700px', objectFit: 'contain' }}
        />
        <Carousel.Caption>
          <h5>Nunca desista!</h5>
          <p>Confie em você</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={resu3}
          alt="terceiro"
          style={{ maxHeight: '700px', objectFit: 'contain' }}
        />
        <Carousel.Caption >
          <h5>Supere seus limites</h5>
          <p>O céu é apenas o começo</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  );
}

export default DarkVariantExample;
