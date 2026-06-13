import styles from "./CardProduto.module.css";

export default function CardProduto({ produto }) {
  if (Object.keys(produto).length === 0) return;

  return (
    <div className={styles.card}>
      <img
        src={produto.imagem}
        alt={produto.nome}
        className={styles.imagemProduto}
      />
      <div className={styles.informacoesProduto}>
        <div className={styles.infosContainer}>
          <span className={styles.adjetivo}>{produto.adjetivo}</span>
          <h3 className={styles.nome}>{produto.nome}</h3>
          <p className={styles.descricao}>{produto.descricao}</p>
        </div>

        <div className={styles.compraContainer}>
          <p className={styles.preco}>{produto.preco}</p>
          <button className={styles.btnComprar}>Comprar</button>
        </div>
      </div>
    </div>
  );
}
