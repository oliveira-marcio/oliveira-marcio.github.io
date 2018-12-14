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
  {
      name: "Configuração do Servidor Linux",
      category: "Full Stack",
      url: "fsnd-config-linux-server"
  },
  {
      name: "Business Card",
      category: "Android",
      url: "abnd-business-card"
  },
  {
      name: "Score Keeper",
      category: "Android",
      url: "abnd-score-keeper"
  },
  {
      name: "Quiz App",
      category: "Android",
      url: "abnd-quiz-app"
  },
  {
      name: "Musical Structure",
      category: "Android",
      url: "abnd-musical-structure"
  },
  {
      name: "Report Card",
      category: "Android",
      url: "abnd-report-card"
  },
  {
      name: "Tour Guide",
      category: "Android",
      url: "abnd-tour-guide"
  },
  {
      name: "Book Listing",
      category: "Android",
      url: "abnd-book-listing"
  },
  {
      name: "Habit Tracker",
      category: "Android",
      url: "abnd-habit-tracker"
  },
  {
      name: "News App",
      category: "Android",
      url: "abnd-news-app"
  },
  {
      name: "Inventory App",
      category: "Android",
      url: "abnd-inventory-app"
  },
  {
      name: "Popular Movies - Stage 1",
      category: "Android",
      url: "adnd-popular-movies-stage1"
  },
  {
      name: "Popular Movies - Stage 2",
      category: "Android",
      url: "adnd-popular-movies-stage2"
  },
  {
      name: "Stock Hawk",
      category: "Android",
      url: "adnd-stock-hawk"
  },
  {
      name: "Baking App",
      category: "Android",
      url: "adnd-baking-app"
  },
  {
      name: "Build It Bigger",
      category: "Android",
      url: "adnd-build-it-bigger"
  },
  {
      name: "Make Your App Material",
      category: "Android",
      url: "adnd-make-material"
  },
  {
      name: "Capstone - Stage 1",
      category: "Android",
      url: "adnd-capstone-stage1"
  },
];
