import { useState } from "react";
import styles from "../css/EX8.module.css";
import useFetch from "../hooks/useFetch.js";

const URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

export default function EX8() {
  const { dados, erro, carregando } = useFetch(URL);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  function handleChange(e) {
    const idCategoriaSelecionada = e.target.value;
    const categoria = dados.categories.filter((cat) => {
      if (cat.idCategory === idCategoriaSelecionada) return cat;
    });
    setCategoriaSelecionada(categoria[0]);
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Exercício 8: categorias de refeições</h2>
      <select defaultValue="" className={styles.select} onChange={handleChange}>
        <option value="" disabled>
          {carregando
            ? "Carregando categorias"
            : erro
              ? "Erro ao carregar as categorias."
              : "Selecione uma receita"}
        </option>
        {!carregando &&
          !erro &&
          dados.categories.map((categoria) => (
            <option key={categoria.idCategory} value={categoria.idCategory}>
              {categoria.strCategory}
            </option>
          ))}
      </select>
      {categoriaSelecionada && (
        <div className={styles.categoriaContainer}>
          <img
            src={categoriaSelecionada.strCategoryThumb}
            alt={categoriaSelecionada.strCategory}
          />
          <p>{categoriaSelecionada.strCategoryDescription}</p>
        </div>
      )}
    </div>
  );
}
