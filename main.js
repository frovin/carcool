(function () {
  "use strict";
  // 47 Chevrolet, 53 Ford, 49 Nissan
  var resultadoCoches = [];

  function formInfo() {
    var form = document.querySelector("form.container");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      resultadoCoches = [];
      var marcaForm = document.getElementById("marcaForm");
      var anioForm = document.getElementById("anioForm");
      var transForm = document.getElementById("transForm");
      var myRange = document.getElementById("myRange");
      console.log(marcaForm.value);
      console.log(anioForm.value);
      console.log(transForm.value);
      console.log(myRange.value);
      fillCard();
      carCool();
    });
  }

  function fillCard() {
    for (var i = 0; i < autos.length; i++) {
      if (
        autos[i].make == marcaForm.value &&
        autos[i].year == anioForm.value &&
        autos[i].transmision == transForm.value &&
        myRange.value >= autos[i].price * 0.2
      ) {
        resultadoCoches.push(autos[i]);
      } else {
      }
    }
  }

  function carCool() {
    var cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = "";
    for (var i = 0; i < resultadoCoches.length; i++) {
      var logo = document.createElement("img");
      logo.className = "card-img-top";

      if (resultadoCoches[i].make == "Chevrolet") {
        logo.setAttribute(
          "src",
          "https://www.carlogos.org/logo/Chevrolet-logo-2011-1366x768.png"
        );
      } else if (resultadoCoches[i].make == "Ford") {
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
      marca.className = "list-group-item";
      marca.innerHTML = "MARCA: " + resultadoCoches[i].make;
      var modelo = document.createElement("li");
      modelo.className = "list-group-item";
      modelo.innerHTML = "MODELO: " + resultadoCoches[i].model;
      var precio = document.createElement("li");
      precio.className = "list-group-item";
      precio.innerHTML = "PRECIO: $" + resultadoCoches[i].price;
      var colores = document.createElement("li");
      colores.className = "list-group-item";
      colores.innerHTML = "COLORES: " + resultadoCoches[i].colors;
      var transmision = document.createElement("li");
      transmision.className = "list-group-item";
      transmision.innerHTML = "TRANSMISION: " + resultadoCoches[i].transmision;
  
      var card = document.createElement("div");
      card.className = "card mt-5";
      card.style = "width: 18rem;";
      var cardBody = document.createElement("div");
      cardBody.className = "card-body";
      var list = document.createElement("ul");
      list.className = "list-group list-group-flush";
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

  formInfo();

  // carCool();
})(); //IIFE
