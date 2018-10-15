const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  console.log("Hello")

  fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( data => {
      console.log("Hi")
    })

  console.log("Sup?")

  function fetchData1(){
          var data = fetch('https://randomuser.me/api/')
            .then( res => res.json() )
            .then( json => console.log(json) )
  }

  fetchData1()

  function fetchData2(){
          var data = fetch('https://randomuser.me/api/')
            .then( res => res.json() )
            .then( console.log )
  }

  fetchData2()

});
