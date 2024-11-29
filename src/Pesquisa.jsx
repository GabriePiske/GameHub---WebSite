import { useForm } from "react-hook-form"
import { Titulo } from "./components/Titulo"
import { ItemJogo } from "./components/itemjogo"
import { useState } from "react"
import './Pesquisa.css'

function Pesquisa() {
  const { register, handleSubmit } = useForm()
  const [jogos, setJogos] = useState([])

  function pesquisaJogos(data) {
    if (data.palavra.length < 2) {
      alert("Informe pelo menos 2 caracteres para realizar a pesquisa")
      return
    }

    if (localStorage.getItem("jogos")) {
      const jogos2 = JSON.parse(localStorage.getItem("jogos"))

      const jogos3 = jogos2.filter(jogo =>
        jogo.genero.toUpperCase().includes(data.palavra.toUpperCase()))

      setJogos(jogos3)
    }
  }

  const listaJogos = jogos.map(jogo => (
    <ItemJogo key={jogo.titulo}
      jogo={jogo}
      jogos={jogos}
      setJogos={setJogos} />
  ));

  return (
    <>
      <Titulo />
      <h1 className="h1_titulo">Pesquisa de Jogos</h1>
      <form className="formulario" onSubmit={handleSubmit(pesquisaJogos)}>
        <p className="form">
          <input type="text" required
            placeholder="Gênero do jogo..."
            {...register("palavra")} />
          <input type="submit" value="Pesquisar" />
        </p>
      </form>
      <div className='grid-jogos'>
        {listaJogos}
      </div>
      <footer class="rodape">
        <section class="rodape__infos">
          <div class="footer">
            <ul class="rodape__lista">
              <li>
                <h2 class="lista__titulo">GamesHub</h2>
              </li>
              <li>
                <p class="lista__texto"> Sua opinião, seu jogo, seu mundo</p>
              </li>
            </ul>
            <ul class="rodape__lista">
              <li>
                <h2 class="lista__titulo">Comunidade</h2>
              </li>
              <li><a href="">Fórum</a></li>
              <li><a href="">Newsletter</a></li>
              <li><a href="">Eventos</a></li>
              <li><a href="">FAQ</a></li>
            </ul>
            <ul class="rodape__lista">
              <li>
                <h2 class="lista__titulo">Empresa</h2>
              </li>
              <li><a href="">Sobre Nós</a></li>
              <li><a href="">Carreiras</a></li>
              <li><a href="">Parceiros</a></li>
              <li><a href="">Contato</a></li>
            </ul>
            <ul class="rodape__lista">
              <li>
                <h2 class="lista__titulo">Social</h2>
              </li>
              <li><a href="">Linkedin</a></li>
              <li><a href="">Facebook</a></li>
              <li><a href="">Instagram</a></li>
              <li><a href="">Twitter</a></li>
            </ul>
          </div>
        </section>
        <div className='rodape__final'>
          <img className='logo__footer' src="./icone_branco.png" alt="Logo GamesHub" />
          <p class="rodape__texto">&copy; GamesHub. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  )
}

export default Pesquisa
