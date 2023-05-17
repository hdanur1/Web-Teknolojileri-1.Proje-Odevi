fetch("https://online-movie-database.p.rapidapi.com/auto-complete?q=game",{
    "method":"GET",
    "headers":{
         "x-rapidapi-host": "online-movie-database.p.rapidapi.com",
        "x-rapidapi-key": "db2ca105a9mshe8887f1ae28af97p1d48d4jsn0c7be68682c8"
     }
 })
 .then(response => response.json())
 .then(data => {
     const list = data.d;
     list.map((item) => {
         const name = item.l;
         const poster = item.i.imageUrl;
         const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
         document.querySelector('.movies').innerHTML += movie;
     })
 })
 .catch(err => {
     console.error(err);
 })

