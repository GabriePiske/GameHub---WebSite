import { Link } from "react-router-dom";
import './Titulo.css';

export function Titulo() {
  return (
    <header>
      <div className="header-content">
        <img src="./GameHub-versaofinal.jpg" alt="Logo da GameHub" />
        <div>
          <h1>GamesHub</h1>
          <h2>Cadastro e Avaliação Pessoal de Jogos</h2>
        </div>
      </div>
      <div className="menu-links">
        <p>
          <Link to="/" className="links">Início</Link>
        </p>
        <p>
          <Link to="/pesquisa" className="links">Pesquisa</Link>
        </p>
      </div>
    </header>
  );
}