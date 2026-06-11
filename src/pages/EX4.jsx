import PerguntasRespostas from "../componentes/PerguntasRespostas/PerguntasRespostas";
import styles from "../css/EX1.module.css";

export default function EX4() {
  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Exercício 4: Pergunta e resposta</h2>
      <div>
        <PerguntasRespostas
          pergunta="Quais são as desvantagens de se colocar funções de seta inline para o tratamento de eventos?"
          resposta={[
            "Ao criar uma função inline dentro do JSX, a instância dela não fica fixa por padrão na memória. Então, toda vez que o componente renderizar, uma nova instância é criada na memória. Caso eu passe essa função como 'props' para um elemento filho, mesmo que ele use o React.memo, vai renderizar novamente caso o elemento pai renderize de novo.",
            "Como o objetivo do JSX é ser o mais declativo possível, ou seja, dizer o que deve aparecer ao invés de como as coisas funcionam, colocar várias chamadas ou chamadas complexas pode poluir o código e deixá-lo mais difícil de dar manutenção. Quando crio uma função separada e apenas faço a referência para essa função, o código fica muito mais limpo: onClick={handleClick}.",
            "Ela também pode deixar a depuração (ou Debugging) mais difícil, especialmente para aplicações maiores, pois como ela é uma função anônima, caso ocorra um erro, no console apareceria apenas algo como 'anonymous (line 252)' ao invés do nome da função (handleClick).",
            "Também há desvantagem ao realizar os testes. Caso haja mais de um elemento com a mesma função, além da duplicação do mesmo código, como é uma função anônima e inline, sou obrigado a duplicar o código do teste, criando um novo teste para cada elemento, sendo obrigado também a renderizar o elemento e simular a ação que vai disparar o evento e executar a função inline, enquanto se eu tiver uma função declarada fora do JSX, posso fazer apenas um teste unitário para ela.",
          ]}
        />
      </div>
    </div>
  );
}
