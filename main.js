(function () {
  "use strict";
  //       var rangePrice = document.getElementById("myRange").value;
  //   precio.addEventListener("change", function() {
  //     precio = rangePrice.value;
  //     return precio;
  // });;

  var form=document.querySelector('form.container')
    form.addEventListener('submit',function(event){
      event.preventDefault()
      var marcaForm=document.getElementById('marcaForm')
      var anioForm=document.getElementById('anioForm')
      var transForm=document.getElementById('transForm')
      var myRange=document.getElementById('myRange')
      console.log(marcaForm.value)
      console.log(anioForm.value)
      console.log(transForm.value)
      console.log(myRange.value)
    })




  function carCool() {
    for (var i = 0; i < autos.length; i++) {
      var logo = document.createElement("img");
      logo.className="card-img-top";

      if (autos[i].make == "Chevrolet") {
        logo.setAttribute(
          "src",
          "https://www.carlogos.org/logo/Chevrolet-logo-2011-1366x768.png"
        );
      } else if (autos[i].make == "Ford") {
        logo.setAttribute(
          "src",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Ford_Motor_Company_Logo.svg/1200px-Ford_Motor_Company_Logo.svg.png"
        );
      } else {
        logo.setAttribute(
          "src",
          "https://purepng.com/public/uploads/large/purepng.com-nissan-logonissannissan-motorautomobile-manufactureryokohamanissan-logo-1701527528576qog0u.png"
        );
      }

      var marca = document.createElement("h5");
      marca.className="list-group-item";
      marca.innerHTML = "MARCA: " + autos[i].make;
      var modelo = document.createElement("li");
      modelo.className="list-group-item";
      modelo.innerHTML = "MODELO: " + autos[i].model;
      var precio = document.createElement("li");
      precio.className="list-group-item";
      precio.innerHTML = "PRECIO: $" + autos[i].price;
      var colores = document.createElement("li");
      colores.className="list-group-item";
      colores.innerHTML = "COLORES: " + autos[i].colors;
      var transmision = document.createElement("li");
      transmision.className="list-group-item";
      transmision.innerHTML = "TRANSMISION: " + autos[i].transmision;

      var card = document.createElement("div");
      card.className="card mt-5";
      card.style = "width: 18rem;";
      var cardBody = document.createElement("div");
      cardBody.className="card-body";
      var list = document.createElement("ul");
      list.className="list-group list-group-flush";
      var cardContainer = document.getElementById("cardContainer");

      list.appendChild(modelo);
      list.appendChild(precio);
      list.appendChild(colores);
      list.appendChild(transmision);
      cardBody.appendChild(marca);
      card.appendChild(logo);
      card.appendChild(cardBody);
      card.appendChild(list);
      cardContainer.appendChild(card);
    }
  }
  carCool();
})(); //IIFE
