import { useState } from "react";
import styles from "../css/EX7.module.css";
import CardProduto from "../componentes/CardProduto/CardProduto";
import produtos from "../utils/produtos";

export default function EX7() {
  const [busca, setBusca] = useState("");
  const produtosFiltrados = busca
    ? produtos.filter((produto) =>
        produto.nome.toLocaleLowerCase().startsWith(busca.toLocaleLowerCase()),
      )
    : produtos;

  function handleChange(e) {
    setBusca(e.target.value);
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Exercício 7: e-commerce</h2>
      <input
        type="text"
        className={styles.input}
        placeholder="Digite o nome do produto"
        value={busca}
        onChange={handleChange}
      />
      <div className={styles.produtosContainer}>
        {produtosFiltrados.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}
