// Fetch API - API Browser para Requests HTTP (AJAX)
// GET (default) tambien soporta otros metodos
// Devuelve Promise

// Github repos => Promise...thens
const url = "https://api.github.com/users/hgiudatto/repos?per_page=100";
// console.log(fetch(url))

// fetch(url).then((resp) => console.log(resp)).catch(err => console.log(err))

/* fetch(url)
  .then((resp) => console.log(resp.json()))
  .then((data) => console.log(data))
  .catch((err) => console.log(err)); */

// Github repos => async / await
/* const fetchRepo = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const reposPorLenguaje = data.reduce((total, repo) => {
      const { language } = repo;
      language && (total[language] = total[language] + 1 || 1);
      return total;
    }, {});
    console.log(reposPorLenguaje);
  } catch (error) {
    console.log(`Ocurrió un error: `, error);
  }
};
fetchRepo(); */
