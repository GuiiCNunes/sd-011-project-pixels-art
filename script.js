window.onload = function () {
  // Desafio 1
  function creatH1 (tag, id, Name){
    let create = document.createElement(tag);
    create.id = id;
    create.innerText = Name;
    document.body.appendChild(create);
  }
  creatH1('h1', 'title', 'Paleta De Cores!');
}