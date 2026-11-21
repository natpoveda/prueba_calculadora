import './Header.css';
import logo from '../../assets/logos.jpg'
import car_mobile from '../../assets/banner_mobile_transparente.png';
import car_desktop from '../../assets/banner_desktop_transparente.png';


export function Header(){
    return(
        <header>
            <div className="header-all">
                <div className="header-left">
                    <a href='#'><img className="image-bluered" src={logo} alt="Logo" /></a>  
                </div>
                 <div className="header-right">
        <div className='header-right-pics'>
            <picture>
          <source
            media="(max-width: 768px)"
            srcSet={car_mobile}
          />
          <img
            src={car_desktop}
            alt="Imagen de Automóvil"
          />
        </picture>
        </div>   
      </div>
            </div>
        </header>
    )
}