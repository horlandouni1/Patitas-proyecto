import './header.css';
import bgperro from "../assets/img/bg-perro.jpg"

function Header() {
    return <header className="home-header" style={{ backgroundImage:`url(${bgperro})`}}>
      <div className="home-header__info">
          <h2>
          "Los amigos no se compran, se adoptan"
          </h2>
      </div>
  </header>
  }

export { Header };