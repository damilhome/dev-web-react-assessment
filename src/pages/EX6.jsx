import { useEffect, useState } from "react";
import styles from "../css/EX6.module.css";
import { useParams } from "react-router-dom";

const URL_PARCIAL =
  "https://api.restcountries.com/countries/v5?limit=100&offset=";
const token = import.meta.env.VITE_REST_COUNTRIES_KEY;

export default function EX6() {
  const [todosOsPaises, setTodosOsPaises] = useState([]);
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");
  const [paisSelecionado, setPaisSelecionado] = useState(null);
  const { pais } = useParams();

  function selecionarPais(selecao) {
    const dadosPaisSelecionado = todosOsPaises.filter((item) => {
      if (item.names.common == selecao) return item;
    });
    setPaisSelecionado(dadosPaisSelecionado[0]);
  }

  function unirListaNomes(lista) {
    const listaNomes = lista.map((item) => item.name);
    return listaNomes.join(", ");
  }

  function handleChange(e) {
    const selecao = e.target.value;
    setOpcaoSelecionada(selecao);
    selecionarPais(selecao);
  }

  useEffect(() => {
    async function buscarDados() {
      try {
        setCarregando(true);

        const offsets = [0, 100, 200];
        const promessas = offsets.map((offset) =>
          fetch(`${URL_PARCIAL}${offset}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then((res) => res.json()),
        );

        const resultados = await Promise.all(promessas);

        setTodosOsPaises([
          ...resultados[0].data.objects,
          ...resultados[1].data.objects,
          ...resultados[2].data.objects,
        ]);
      } catch (e) {
        console.error("Erro ao carregar os países:", e);
        setErro(e);
      } finally {
        setCarregando(false);
      }
    }
    buscarDados();
  }, []);

  useEffect(() => {
    if (pais === "brasil") {
      setOpcaoSelecionada("Brazil");
      selecionarPais("Brazil");
    } else {
      setOpcaoSelecionada("");
      selecionarPais(null);
    }
  }, [pais]);

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Exercício 6: lista de países do mundo</h2>
      <select
        className={styles.select}
        value={opcaoSelecionada}
        onChange={handleChange}
      >
        <option value="" disabled>
          {carregando
            ? "Carregando países..."
            : erro
              ? "Erro ao carregar os países."
              : "Selecione uma opção"}
        </option>
        {!carregando &&
          todosOsPaises.map((pais) => (
            <option key={pais.uuid} value={pais.names.common}>
              {pais.names.common}
            </option>
          ))}
      </select>
      {paisSelecionado && (
        <div className={styles.infosContainer}>
          <p>
            <span className={styles.realce}>Capital(is):</span>{" "}
            {unirListaNomes(paisSelecionado.capitals)}
          </p>
          <p>
            <span className={styles.realce}>Língua(s) oficial(is):</span>{" "}
            {unirListaNomes(paisSelecionado.languages)}
          </p>
          <p>
            <span className={styles.realce}>População:</span>{" "}
            {paisSelecionado.population}
          </p>
          <p>
            <span className={styles.realce}>Continente:</span>{" "}
            {paisSelecionado.region}
          </p>
        </div>
      )}
    </div>
  );
}
