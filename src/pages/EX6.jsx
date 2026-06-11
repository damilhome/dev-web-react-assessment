import { useEffect, useState } from "react";
import styles from "../css/EX6.module.css";
import useFetch from "../hooks/useFetch";

const URL_PARCIAL =
  "https://api.restcountries.com/countries/v5?limit=100&offset=";
const token = import.meta.env.VITE_REST_COUNTRIES_KEY;

export default function EX6() {
  const [todosOsPaises, setTodosOsPaises] = useState([]);
  const [carregando, setCarregando] = useState(true);

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
        console.error("Erro ao buscar as páginas:", e);
      } finally {
        setCarregando(false);
      }
    }
    buscarDados();
  }, []);

  useEffect(() => {
    console.log("Total de países juntados:", todosOsPaises.length);
    console.log("Lista completa unida:", todosOsPaises);
    console.log("Exemplo do primeiro país:", todosOsPaises[0]);
  }, [todosOsPaises]);

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Exercício 6: lista de países do mundo</h2>
      <select className={styles.select} defaultValue="">
        <option value="" disabled>
          {carregando ? "Carregando países..." : "Selecione uma opção"}
        </option>
        {!carregando &&
          todosOsPaises.map((pais, index) => (
            <option key={index}>{pais.names.common}</option>
          ))}
      </select>
    </div>
  );
}
