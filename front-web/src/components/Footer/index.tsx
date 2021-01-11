import './styles.css'

import { ReactComponent as InstagramICon } from '../../assets/instagram.svg'

function Footer() {
  return (
    <footer className='main-footer'>
      <p>App Desenvolvido na 2ª ed. do evento semanada DevSiperior</p>
      <p>desenvolvido por Tafarel Mello</p>

      <div className='footer-icons'>
        <a href='http:www.github.com/tafarelmello' target='_new'>
          <InstagramICon />
        </a>

        <a href='http://www.devsupeior-redesocial' target='_new'>
          <InstagramICon />
        </a>
      </div>
    </footer>
  )
}

export default Footer
