
// a API do The Movie DB exige autenticação via Authorization: Bearer <token>, 
// então você é obrigado a usar o objeto options para passar esse header personalizado:

const getMovies = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODE3ODgzMDYzZmI0N2U0NDRlYjVkODUyODgzYTkwYyIsIm5iZiI6MTc0NjIyNDgyMi45MTEsInN1YiI6IjY4MTU0NmI2MjE0Zjk0YmFlYjkwN2NhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C6BrTJvEj_iTTAHS_9rwaQNJDNCTzwP6T6ROLTp9peo'
      }
    };
  
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1', options);
      const data = await response.json();
      const top10 = data.results.slice(0, 10); // pega os 10 primeiros filmes
      console.log(top10);
      return top10; // retorna os 10 primeiros filmes
    } catch (error) {
      console.error(error);
      return {}; // objeto vazio em caso de erro
    }
  };

  // buscar generos
const getGenresMap = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODE3ODgzMDYzZmI0N2U0NDRlYjVkODUyODgzYTkwYyIsIm5iZiI6MTc0NjIyNDgyMi45MTEsInN1YiI6IjY4MTU0NmI2MjE0Zjk0YmFlYjkwN2NhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C6BrTJvEj_iTTAHS_9rwaQNJDNCTzwP6T6ROLTp9peo'
      }
    };
  
    const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=pt-BR', options);
    const data = await response.json();
  
    // Cria um mapa de ID para nome
    const genreMap = {};
    console.log(data.genres);
    data.genres.forEach(genre => {
      genreMap[genre.id] = genre.name;
    });
  
    return genreMap;
  };

  const getMoviesComplete = async () => {
    const movies = await getMovies();
    const genres = await getGenresMap();
    console.log(genres);
    return { movies, genres };  
  };
  
  
  export default getMoviesComplete;
  
