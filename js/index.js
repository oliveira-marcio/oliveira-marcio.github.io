/*
 * Função de ordenação para ordenar array de objetos por determinada key
 * inspirada no pacote "sort-by" (https://www.npmjs.com/package/sort-by)
 *
 * O parâmetro de entrada corresponde a uma das chaves do objeto a ser ordenado.
 * Caso o parâmetro comece com "-", será gerado a ordem inversa
 *
 * O método retorna uma função de ordenação de acordo com a key especificada
 * para ser usada como entrada no método "sort()" de Arrays.
 */
const sort_by = (inputKey) => (a, b) => {
  let key = inputKey;
  let reverse = 1;

  if (inputKey[0] === "-"){
      key = input_key.substr(1);
      reverse = -1;
  }

  const keyA = ("" + a[key]).toUpperCase();
  const keyB = ("" + b[key]).toUpperCase();

  let comparison = 0;
  if (keyA > keyB) {
    comparison = 1;
  } else if (keyA < keyB) {
    comparison = -1;
  }
  return comparison * reverse;
};

const buildProjectsSection = (section) => {
    const GITHUB_BASE = "https://github.com/oliveira-marcio/";
    let filteredProjects;

    if(section === "Featured Work"){
        filteredProjects = projects.filter(p => p.hasOwnProperty("featured"));
        filteredProjects.sort(sort_by('featured'));
    } else {
        filteredProjects = projects.filter(p => p.category === section);
        filteredProjects.sort(sort_by('name'));
    }

    let html = `<section class="projects-title"><h2>${section}:</h2></section>`;
    html += `<section class="projects-container">`;
    filteredProjects.map(project => {
        html += `<figure><a href="${GITHUB_BASE + project.url}" target="_blank">`;
        if(section === "Featured Work") {
            html += `<div class="label">${project.category}</div>`;
        }
        html += `<img class="shadowed" src="img/`;
        html += project.hasOwnProperty("image") ? project.image : "no_image.jpg";
        html +=  `" alt="${project.name}">`;
        html += `</a><figcaption>${project.name}</figcaption></figure>`;
    });
    html += `</section>`;

    return html;
}

const renderProjects = () => {
    const sections = ["Featured Work", "Android", "React", "Full Stack", "Data Science", "Machine Learning"];
    let html = "";
    sections.map(section => html += buildProjectsSection(section));
    document.getElementById("projects").innerHTML = html;
};
