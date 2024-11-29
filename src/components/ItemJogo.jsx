import { Estrelas } from "./Estrelas"
import "./ItemJogo.css"

export function ItemJogo({ jogo, jogos, setJogos }) {

  function avaliaJogo() {
    const nota = Number(prompt(`Qual a nota do jogo ${jogo.titulo}?`));
    if (nota < 1 || nota > 5 || isNaN(nota)) {
      alert("Informe uma nota entre 1 e 5");
      return;
    }

    const comentario = prompt("Qual seu comentário sobre o jogo?");
    if (comentario === "") {
      alert("Erro... você deve indicar um comentário");
      return;
    }

    const jogos2 = [...jogos];

    const ind = jogos2.findIndex(x => x.titulo === jogo.titulo);

    jogos2[ind].nota = nota;
    jogos2[ind].comentario = comentario;

    setJogos(jogos2);
    localStorage.setItem("jogos", JSON.stringify(jogos2));
    alert("Ok! Jogo avaliado com sucesso!");
  }

  return (
    <div className='grid-item'>
      <img src={jogo.capa} alt="Capa do jogo" className='capa-jogo' />
      <div>
        <h3>{jogo.titulo}</h3>
        <p className='genero'>
          {jogo.genero}
        </p>
        <p className='descricao'>{jogo.descricao}</p>
        {jogo.nota === 0 ?
          <>
            <img src="./novojogo2.jpg" alt="Novo jogo" className="novo" />
            <button onClick={avaliaJogo}>Avaliar</button>
          </>
          :
          <>
            <Estrelas num={jogo.nota} />
            <p className="comentario">{jogo.comentario}</p>
          </>
        }
      </div>
    </div>
  );
}
