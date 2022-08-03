const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const lista = document.getElementsByClassName("lista");

  for(let i=0; i<=5; i++){
    var lastChild = lista[0].lastChild;
    lista[0].removeChild(lastChild);
  }

  for(let i = 0; i< cosasQueAprendimos.length; i++){
    
    
    const text = cosasQueAprendimos[i].tema;
    const clase = cosasQueAprendimos[i].class;

    const newEl = document.createElement('li');
    newEl.append(text);

    if(clase.length > 0 ){
      newEl.className = clase;
    }
    // console.log(text , " " , clase )

    lista[0].append(newEl)


  }
  
}
  




main();
