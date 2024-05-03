// // aula 01 semana 6

// // const promise = new Promise((resolve, reject) => {
// //     let id = 12;
// //     if(id){
// //         resolve('Deu certo');
// //     }else{
// //         reject('Deu erro');
// //     }       
// // }) ;

// // promise
// // .then((id) => {
// //     console.log('Entrei no primeiro then');
// //     console.log(mensagem);
// //     let user = pegarUsuarioPeloId(id);  
// //     return user;
// // })

// // .then((user) => {
// //     console.log('Entrei no segundo then');
// //     console.log(user );    
// // })

// // .then((mensagem) => {
// //     console.log('Entrei no terceiro then');
// //     console.log(mensagem);    
// // })


// // .catch((erro) => {
// //     console.log(erro);
// //sem async await
// // const  promise = new Promise((resolve, reject) => {
// // //     resolve("Resolve promise");
// //     }) ;


// // //     promise.then((mensagem) => { 
// // //         console.log(mensagem);    
// // //     })

// //     //Com async await

// //    async function inicio() {
// //     console.log("Entrou inicio");
// //     const id = await pegarId();
// //     console.log("Passou do pegar id");
// //     pegarUsuarioPeloId(id)
// //     console.log("passou do poegra usuario pelo id");
// //     }

// //    async function pegarId(){
// //        console.log("Entrou no pegar id");
// //        setTimeout(() => {
// //        console.log("Entrou no set time out"); 
// //        let id = 10;
// //        return id;   
// //     }, 5000);
// //        console.log("Entrou no pegar usuario ppelo id");
// //    }

// //    function pegarUsuarioPeloId(identificador){
// //     console.log("Entrou no pegar usuariom mpelo id");
// //     console.log(identificador);
// //    }


// //     inicio();     

//     // fim da aula 01 semana 6

//     // inicio aula 2 semana 6
//      // local storege

//     // // let user = { nome: "Cleiton jacoby de souza", idade: 42};
//     // function saveKeyFromLocalStorage() {
//     //     // let nome = "kleitton";
//     //     // let idade = 23;  
//     //     // localStorage.setItem("nome", nome);
//     //     // localStorage.setItem("idade", idade);

//     // }
//     // // saveKeyFromLocalStorage();

//     // let nameUser = localStorage.getItem("nome");
//     // let idade = localStorage.getItem("idade");
//     // console.log(nameUser);
//     // console.log(parseInt(idade));
//     // localStorage.removeItem("idade");


// let options = {
//     method: 'GET'
// };    

// fetch('https://pokeapi.co/api/v2/pokemon/charmander', options)
// .then((respostaFetch)=>{
//   return respostaFetch.json();
// })

// .then((respostaApi)=>{
//     debugger;
//     console.log(respostaApi) 
//     console.log(respostaApi.sprites) 
//     console.log(respostaApi.sprites.front_default) 
//     console.log(respostaApi.name)

//     let url = respostaApi.sprites.front_default
//     document.write(`<h1>${respostaApi.name}</h1>`)
//     document.write(`<img src='${url}'/>`)
//   })

// .catch(()=>{cleiton

// }) 

//Exercicio 1 Ray

// let nome = prompt('Qual a seu nome?');
// let idade = prompt('Qual a sua idade?');
// let endereço = prompt('Qual seu endereço?'); 

// localStorage.setItem('name', nome);
// localStorage.setItem('age', idade);
// localStorage.setItem('adress', endereço);

//Exercicio 2 Ray

// fetch("https://rickandmortyapi.com/api/character/53", {method:"GET"})
// .then((responseFetch)=>{
//  return responseFetch.json();
// })
// .then((responseApi)=>{
//   document.write(`<img src='${responseApi.image}'/>`);
// })
// .catch((error)=>{})



// Exercicio 2 trelllo
function getUserInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let user = {
        nome: "Cleiton",
        idade: 42,
        email: "kleitton2008@gmail.com"
      };
      resolve(user);
    }, 2000)

  })
}

async function playGetUser() {
  let retorno = await getUserInfo();
  console.log(retorno);
}
playGetUser();