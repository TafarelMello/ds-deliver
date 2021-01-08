import { ReactComponent as HomeImage } from '../../assets/home-imagem.svg'
import { Link } from 'react-router-dom'

import Footer from '../../components/Footer'
import './styles.css'

function Home() {
  return (
    <>
      <div className='home-container'>
        <div className='home-content'>
          <div className='home-action'>
            <h1 className='home-title'>
              Faça seu pedido <br /> que entregamos <br /> pra você!!!
            </h1>

            <h3 className='home-sub'>
              Escolha o seu pedido e em poucos minutos <br /> levaremos na sua
              porta
            </h3>

            <Link to='/orders' className='home-btn-order'>
              FAZAR PEDIDO
            </Link>
          </div>

          <div className='home-image'>
            <HomeImage />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home
