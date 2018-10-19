/*
 * Projetos
 *
 * atributos obrigatórios:
 * - name: Será exibido como título e alt da imagem
 * - category: Colocará o projeto na seção informada
 * - url: Link para o projeto
 *
 * atributos opcionais:
 * - image: será exibida imagem padrão _no_image.jpg
 * - featured: caso fornecido, o projeto será exibido em "Featured Work" ordenado
 * pelo valor definido.
 */
const projects = [
  {
      name: "Histórias Infantis",
      category: "Android",
      image: "project_historias_infantis.jpg",
      url: "https://github.com/oliveira-marcio/HistoriasInfantis",
      featured: 1
  },
  {
      name: "FlashCards",
      category: "React Native",
      image: "project_react_native.jpg",
      url: "https://github.com/oliveira-marcio/react-native-flashcards",
      featured: 2
  },
  {
      name: "Leitura",
      category: "React",
      image: "project_react_leitura.jpg",
      url: "https://github.com/oliveira-marcio/react-leitura",
      featured: 3
  },
  {
      name: "My Reads",
      category: "React",
      image: "project_react_myreads.jpg",
      url: "https://github.com/oliveira-marcio/react-my-reads",
      featured: 4
  },
  {
      name: "Enron Fraud",
      category: "Machine Learning",
      image: "project_machine_learning.jpg",
      url: "https://github.com/oliveira-marcio/ml-enron-fraud",
      featured: 5
  },
  {
      name: "We Hate Dogs",
      category: "Data Science",
      image: "project_ds_wrangling.jpg",
      url: "https://github.com/oliveira-marcio/we-hate-dogs-wrangling",
      featured: 6
  },
];
