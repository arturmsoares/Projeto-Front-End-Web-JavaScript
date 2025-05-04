import getMoviesComplete from "./tmdb.js";

window.addEventListener("DOMContentLoaded", () => {

    // const gatos = getCats();
    // console.log(gatos);
    // document.getElementById("btnShowMovies").addEventListener("click", showMovies);
    showMovies();

});



const showMovies = async () => {
    // showMsgAlerta("Processando, aguarde...");
    const { movies, genres } = await getMoviesComplete();//aguarda a função assincrona ser executada 
    // para inseri-la em uma variável


    if (movies.length > 0) {
        const moviePanel = document.getElementById("moviePanel");

        movies.forEach(movie => {
            const movieCard = document.createElement("div");
            movieCard.className = "movieCard";
        
            const img = document.createElement("img");
            img.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
            img.className = "moviePoster";
            img.alt = "poster";
            movieCard.appendChild(img);
        
            const p1 = document.createElement("p");
            p1.innerHTML = movie.title;
            p1.className = "filmTitle";
            movieCard.appendChild(p1);
        
            const li0 = document.createElement("li");
            li0.innerHTML = `Sinopse: ${movie.overview}`;
            li0.className = "filmSinopse";
            movieCard.appendChild(li0);
        
            const genreNames = movie.genre_ids.map(id => genres[id]).join(', ');
            const li1 = document.createElement("li");
            li1.innerHTML = `Gênero(s): ${genreNames}`;
            li1.className = "filmGenre";
            movieCard.appendChild(li1);
        
            const li2 = document.createElement("li");
            li2.innerHTML = `Avaliação: ${movie.vote_average}`;
            li2.className = "filmVote";
            movieCard.appendChild(li2);
        
            moviePanel.appendChild(movieCard);
        });

        // showMsgAlerta("");
        // console.log

    }
    // else {
    //     showMsgAlerta("Erro no carregamento dos gatos");
    // }

}

// const showMsgAlerta = (msg) => {
//     document.getElementById("msgAlerta").innerHTML = msg;
// }