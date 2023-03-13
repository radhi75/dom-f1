var btnplus = document.querySelectorAll(".plus");
var qte = document.querySelectorAll(".qte");
var btnminus = document.querySelectorAll(".minus");

for (let i = 0; i < btnplus.length; i++) {
  btnplus[i].addEventListener("click", function () {
    qte[i].innerHTML++;
    totale();
  });
}

for (let i = 0; i < btnminus.length; i++) {
  btnminus[i].addEventListener("click", function () {
    if (qte[i].innerHTML > 0) {
      qte[i].innerHTML--;
      totale();
    } else {
      return (qte[i].innerHTML = 0);
    }
  });
}

var heart = document.querySelectorAll(".fa-heart");

for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function () {
    if (heart[i].style.color != "red") {
      return (heart[i].style.color = "red");
    } else {
      return (heart[i].style.color = "gray");
    }
  });
}
var trash = document.querySelectorAll(".fa-trash-can");

for (let i = 0; i < trash.length; i++) {
  trash[i].addEventListener("click", function () {
    trash[i].parentElement.parentElement.remove();
    totale();
  });
}

// var dragon = document.querySelectorAll(".fa-dragon");
// var fire = document.querySelectorAll(".fa-fire");
// for (let i = 0; i < dragon.length; i++) {
//   dragon[i].addEventListener("click", function () {
//     fire[i].setAttribute("id", "fire");
//   });
// }

// function totale() {
//   for (let i = 0; i < price.length; i++) {
//     score = score + qte[i].innerHTML * price[i].innerHTML;
//   }
//   return (total.innerHTML = score);
// }
function totale() {
  var price = document.querySelectorAll(".prix");
  var qte = document.querySelectorAll(".qte");
  let totalprice = 0;
  for (let i = 0; i < price.length; i++) {
    totalprice = totalprice + qte[i].innerHTML * price[i].innerHTML;
  }
  document.getElementById("total").innerHTML = totalprice;
}
