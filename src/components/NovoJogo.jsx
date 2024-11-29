import { useForm } from 'react-hook-form';
import './NovoJogo.css'

export function NovoJogo({ jogos, setJogos }) {
  const { register, handleSubmit } = useForm();

  function salvaJogo(data) {
    const novo = {
      titulo: data.titulo,
      genero: data.genero,
      capa: data.capa,
      descricao: data.descricao,
      nota: 0,
      comentario: ""
    };

    const jogos2 = [novo, ...jogos];
    setJogos(jogos2);
    localStorage.setItem("jogos", JSON.stringify(jogos2));
  }

  return (
    <>
      <h2 className='titulo_formulario'>Formulário de Cadastro de Jogos</h2>
      <form onSubmit={handleSubmit(salvaJogo)}>
        <p>
          <label htmlFor="titulo">Título do Jogo:</label>
          <input type="text" id="titulo"
            {...register("titulo")}
            required />
        </p>
        <p>
          <label htmlFor="genero">Gênero:</label>
          <input type="text" id="genero"
            {...register("genero")}
            required />
        </p>
        <p>
          <label htmlFor="capa">URL da Capa:</label>
          <input type="text" id="capa"
            {...register("capa")}
            required />
        </p>
        <p>
          <label htmlFor="descricao">Descrição:</label>
          <textarea id="descricao"
            {...register("descricao")}
            required></textarea>
        </p>
        <p>
          <input type="submit" value="Cadastrar" />
          <input type="reset" value="Limpar" />
        </p>
      </form>
    </>
  );
}
