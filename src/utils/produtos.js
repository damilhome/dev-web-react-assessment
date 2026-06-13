import { fakerPT_BR as faker } from "@faker-js/faker";

const produtos = new Array(100).fill().map(() => ({
  id: faker.string.uuid(),
  nome: faker.commerce.productName(),
  descricao: faker.commerce.productDescription(),
  adjetivo: faker.commerce.productAdjective(),
  preco: faker.commerce.price({ min: 10, max: 2000, dec: 2, symbol: "R$ " }),
  imagem: faker.image.url({
    category: "commerce",
  }),
  avaliacao: faker.number.float({
    min: 1,
    max: 5,
    fractionDigits: 1,
  }),
}));

export default produtos;
