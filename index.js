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
    console.log(i)
  }
  
}
  




main();
