// const name=document.getElementById(btn);

let movieName =document.getElementById(btn)
fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1')
    .then(response => response.json())
    .then(response => {
        console.log(response); 
    })
    /*original_language.innerHTML = response.original_language
        original_title.innerHTML = response.original_title
        overview.innerHTML = response.overview
        popularity.innerHTML = response.popularity
        poster_path.innerHTML = response.poster_path
        release_date.innerHTML = response.release_date
        title.innerHTML = response.title*/
btn.addEventListener("click", (e) => {
            e.preventDefault()
        })

