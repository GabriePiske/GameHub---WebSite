import { useState, useEffect } from 'react'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import './App.css'
import { Titulo } from './components/Titulo'
import { ItemJogo } from './components/itemjogo'
import { NovoJogo } from './components/NovoJogo'


function App() {
  const [jogos, setJogos] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("jogos")) {
      const jogosSalvos = JSON.parse(localStorage.getItem("jogos"));
      setJogos(jogosSalvos);
    }
  }, []);

  const listaJogos = jogos.map(jogo => (
    <ItemJogo
      key={jogo.titulo}
      jogo={jogo}
      jogos={jogos}
      setJogos={setJogos}
    />
  ));

  function adicionarJogo() {
    setOpen(true);
  }

  return (
    <>
      <body>
        <Titulo />
        <main>
          <div className='h2-btn'>
            <h2 className='h2-subtitulo'>Jogos Cadastrados</h2>
            <button onClick={adicionarJogo}>Adicionar</button>
          </div>
          <div className='grid-jogos'>
            {listaJogos}
          </div>
        </main>
        <Modal open={open} onClose={() => setOpen(false)} center>
          <NovoJogo jogos={jogos} setJogos={setJogos} />
        </Modal>
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
      </body>
    </>
  );
}

export default App;
