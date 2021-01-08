import './styles.css'

import { ReactComponent as YouTubeICon } from '../../assets/youtube.svg'

function Footer() {
  return (
    <footer className='main-footer'>
      <p>App Desenvolvido na 2ª ed. do evento semanada DevSiperior</p>
      <p>
        desenvolvido por Tafarel Mello <span>sz</span>
      </p>

      <div className='footer-icons'>
        <a href='http:wwwgithub.com/tafarelmello' target='_new'>
          <YouTubeICon />
        </a>

        <a href='http://www.devsupeior-redesocial' target='_new'>
          <YouTubeICon />
        </a>
      </div>
    </footer>
  )
}

export default Footer
