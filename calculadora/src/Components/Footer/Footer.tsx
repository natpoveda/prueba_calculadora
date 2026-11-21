import Fcar from '../../assets/footer-car.png'
import Fschield from '../../assets/footer-shield.png'
import Faudio from '../../assets/footer-audio.png'
import './Footer.css'

export function Footer(){
    return(
        <footer>
            <div className="footer-boxes">
                <div className="footer-box">
                    <img src={Fcar} />
                    <p><strong>Asistencia en carretera</strong> En todo el país</p>
                </div>

                <div className="footer-box">
                    <img src={Fschield} />
                    <p><strong>Acompañamiento</strong> Personalizado</p>
                </div>

                <div className="footer-box">
                    <img src={Faudio} />
                    <p><strong>Respaldo de una</strong>compañía líder de negocios</p>
                </div>
            </div>
        </footer>
    )
}