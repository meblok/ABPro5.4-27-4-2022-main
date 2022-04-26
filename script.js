let verPost=document.getElementById('postBlog');
var url = 'https://newsapi.org/v2/everything?' +
          'q=Technology&' +
          'from=2022-04-01&' +
          'language=es&'+
          'sortBy=popularity&' +
          'apiKey=76d16bae822e47929ec0a4353c4f206f';

var req = new Request(url);
let arregloArticulos = [];
let favorito = [];


async function traer() {
try { 
    
const  response =  await fetch(req)
const data = await response.json()
arregloArticulos = data.articles
/* recorrerPost(arregloArticulos) */
 
console.log(arregloArticulos)}
  catch (err){ 
  console.log(err)}
 /*  .then(response=>response.json())
  .then((news)=>{
  arregloArticulos=news.articles
  console.log(arregloArticulos)
  recorrerPost(arregloArticulos) */
  

   };


/* ------------------------------------- */
/*   async function alerta() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 3000)
    });

    let result = await promise; // wait until the promise resolves (*)

    alert(result); // "done!"
}

alerta(); */

/* --------------------------------- */



function recorrerPost(){
  
  verPost.innerHTML = ''
  arregloArticulos.map(e => {
    
  verPost.innerHTML+= `
  <div class="col-md-6">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success">${e.author}</strong>
          <h3 class="mb-0">${e.title}</h3>
          <div class="mb-1 text-muted">${e.publishedAt}</div>
          <p class="card-text mb-auto">${e.description}</p>
          <a href=${e.url} class="btn btn-outline-success">Continuar Leyendo</a>
          <button class="btn btn-outline-warning" onclick = "agregarFavorito('${e.title}')">Agregar a Favoritos</button>
          </div>
        <div class="col-auto d-none d-lg-block">
          <img class="bd-placeholder-img" width="200" height="250" src=${e.urlToImage}>
      </div>
    </div>
</div>`
})
}

/* function buscar() {
  fetch(req)
  .then(response=>response.json())
  .then((news)=>{
  arregloArticulos=news.articles
  console.log(arregloArticulos)
  findNews(arregloArticulos)
  }) } */
function findNews() {
  verPost.innerHTML=``
  const buscarPost = document.getElementById("buscarF").value
if(buscarPost == "")
  {
    alert("Su Busqueda está vacia")
  }
else if (!isNaN(buscarPost)) 
{
  alert("no puede ingresar numeros");
}


else{const nombrePost = buscarPost.toLowerCase()
  let filtroPost=[];
filtroPost=arregloArticulos.filter(arregloArticulos=> arregloArticulos.title.includes(nombrePost));
if(filtroPost==""){
  alert("No se encuentra ningun Post")}
filtroPost.map((e) => {
  let title=(e.title)
    verPost.innerHTML += ` <div class="col-md-6">
    <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div class="col p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-success">${e.author}</strong>
        <h3 class="mb-0">${e.title}</h3>
        <div class="mb-1 text-muted">${e.publishedAt}</div>
        <p class="card-text mb-auto">${e.description}</p>
        <a href=${e.url} class="btn btn-outline-success">Continuar Leyendo</a>
        <button class="btn btn-outline-warning" onclick = "agregarFavorito('${title}')" type="button">Agregar a Favoritos</button>
        </div>
      <div class="col-auto d-none d-lg-block">
        <img class="bd-placeholder-img" width="200" height="250" src=${e.urlToImage}>
    </div>
  </div>
</div`
  })}
}
//agregar a favoritos
//Funcion toggle favoritos

function toggle(e) {
  let txt = e.innerText;
  e.innerText = txt == 'Remover de Favoritos' ? 'Agregar a Favoritos' : 'Remover de Favoritos';
}

let favoritoContenido=document.getElementById("favoritoContenido")

/* function agregarFav() {
  fetch(req)
  .then(response=>response.json())
  .then((news)=>{
  arregloArticulos=news.articles
  console.log(arregloArticulos)
  agregarFavorito()
  }) } */
function agregarFavorito(title) {

let agregar = arregloArticulos.find(elemento => elemento.title === title);
  favorito.push(agregar)
  favoritoContenido.innerHTML=``
  favorito.forEach(e => {
      favoritoContenido.innerHTML += `<div class="col-md-6">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0">${e.title}</h3>
          <a href=${e.url} class="btn btn-outline-success">Continuar Leyendo</a>
          <a onclick="borrarFavoritos()" class="btn btn-outline-warning">Borrar Favoritos</a>
          </div>
    </div>
  </div>`
  })
}

// Funcion para Borrar Favoritos

function borrarFavoritos() {
  favoritoContenido.innerHTML=``
  favorito = []
}

