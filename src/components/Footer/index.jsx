import { Link } from "react-router-dom";
import './footer.css';
import blanco from "./assets/img/blanco.png"

function Footer() {
    return <footer className="footer">
    <a href="."><img className="footer__logo" src={blanco} alt="logotipo"/></a>
            <nav className="footer__nav">
                <ul className="footer__ul">
                <li><Link to="/adopta">Adopta</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/tienda">Tienda</Link></li>
                <li><Link to="/consultas">Consultas</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
            <div className="redes">
                <h5>Visita nuestras redes</h5>
                <div className="redes-iconos">
                    <Link to="www.facebook.com" className="link"> <svg xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-brand-facebook" width="28" height="28" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg></Link>
                    <Link to="www.instagram.com" className="link"> <svg xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-brand-instagram" width="28" height="28" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="4" y="4" width="16" height="16" rx="4" />
                            <circle cx="12" cy="12" r="3" />
                            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                        </svg></Link>
                    <Link to="wwww.youtube.com" className="link"> <svg xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-brand-youtube" width="28" height="28" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="3" y="5" width="18" height="14" rx="4" />
                            <path d="M10 9l5 3l-5 3z" />
                        </svg></Link>
                </div>
            </div>
  </footer >;
  }

export { Footer };