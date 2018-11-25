/*
 * Projetos
 *
 * atributos obrigatórios:
 * - name: Será exibido como título e alt da imagem
 * - category: Colocará o projeto na seção informada
 * - url: Link para o projeto (apenas a pasta)
 *
 * atributos opcionais:
 * - image: (usar imagens 800 x 600) será exibida imagem padrão 'no_image.jpg'
 * - featured: caso fornecido, o projeto será exibido em "Featured Work" ordenado
 * pelo valor definido.
 */
const projects = [
  {
      name: "Histórias Infantis",
      category: "Android",
      image: "project_historias_infantis.jpg",
      url: "HistoriasInfantis",
      featured: 1
  },
  {
      name: "FlashCards (React Native)",
      category: "React",
      image: "project_react_native.jpg",
      url: "react-native-flashcards",
      featured: 2
  },
  {
      name: "Leitura (Redux)",
      category: "React",
      image: "project_react_leitura.jpg",
      url: "react-leitura",
      featured: 3
  },
  {
      name: "Item Catalog",
      category: "Full Stack",
      image: "project_fs_item_catalog.jpg",
      url: "fsnd-item-catalog",
      featured: 4
  },
  {
      name: "Enron Fraud",
      category: "Machine Learning",
      image: "project_machine_learning.jpg",
      url: "ml-enron-fraud",
      featured: 5
  },
  {
      name: "We Hate Dogs (Data Wrangling)",
      category: "Data Science",
      image: "project_ds_wrangling.jpg",
      url: "we-hate-dogs-wrangling",
      featured: 6
  },
  {
      name: "Music Store (SQL Analysis)",
      category: "Data Science",
      url: "sql-music-store"
  },
  {
      name: "E-commerce Strategy (A/B Test)",
      category: "Data Science",
      url: "ab-test-statistics"
  },
  {
      name: "Simplified Popular Movies Stage 2 (with AAC)",
      category: "Android",
      url: "popular-movies-AAC"
  },
  {
      name: "My Reads",
      category: "React",
      image: "project_react_myreads.jpg",
      url: "react-my-reads",
  },
  {
      name: "Movie Trailers Website",
      category: "Full Stack",
      image: "project_fs_movie_website.jpg",
      url: "fsnd-movie-trailers-site"
  },
  {
      name: "My Portfolio Website",
      category: "Full Stack",
      image: "project_fs_portfolio.jpg",
      url: "oliveira-marcio.github.io"
  },
  {
      name: "Log Analysis (SQL + Python)",
      category: "Full Stack",
      url: "fsnd-log-analysis"
  },
  {
      name: "Cat Clicker",
      category: "Full Stack",
      image: "project_cat_clicker.jpg",
      url: "cat-clicker"
  },
  {
      name: "Neighborhood Map",
      category: "React",
      image: "project_react_neighborhood_map.jpg",
      url: "neighborhood-map"
  },
];
