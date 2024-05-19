import Logo from '../assets/images/Logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const HeaderInfo = () => {
  return (
    <header>
      <button className='MenuButton'>
        <FontAwesomeIcon icon="fa-solid fa-bars" />
      </button>
      <div className='LogoContainer'>
        <img src={Logo} className="Logo" alt="Logo" />
      </div>
    </header>
  )
}
