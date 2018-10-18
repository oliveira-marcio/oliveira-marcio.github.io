const projects = [
  { name: 'Leitura', category: 'React'},
  { name: 'Histórias', category: 'Android'},
  { name: 'FlashCards', category: 'React'},
];

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
const sort_by = (input_key) => (a, b) => {
  let key = input_key;
  let reverse = 1;

  if (input_key[0] === "-"){
      key = input_key.substr(1);
      reverse = -1;
  }

  const keyA = a[key].toUpperCase();
  const keyB = b[key].toUpperCase();

  let comparison = 0;
  if (keyA > keyB) {
    comparison = 1;
  } else if (keyA < keyB) {
    comparison = -1;
  }
  return comparison * reverse;
};

const sortReactProjects = () => {
    const filtered = projects.filter(p => p.category === "React");
    filtered.sort(sort_by('name'));
    const names = filtered.map(x => x.name);
    alert(names);
};
