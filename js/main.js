$(document).ready(function () {
  // var carta0 = $("#cartaAngular1");
  // var carta1 = $("#cartaAngular2");
  // var carta2 = $("#cartaCss1");
  // var carta3 = $("#cartaCss2");
  // var carta4 = $("#cartaHtml1");
  // var carta5 = $("#cartaHtml2");
  // var carta6 = $("#cartaNode1");
  // var carta7 = $("#cartaNode2");
  // var verso0 = $("#versoAngular1");
  // var verso1 = $("#versoAngular2");
  // var verso2 = $("#versoCss1");
  // var verso3 = $("#versoCss2");
  // var verso4 = $("#versoHtml1");
  // var verso5 = $("#versoHtml2");
  // var verso6 = $("#versoNode1");
  // var verso7 = $("#versoNode2");

  

  // const possicaoCartas = [
  //   carta0,
  //   carta1,
  //   carta2,
  //   carta3,
  //   carta4,
  //   carta5,
  //   carta6,
  //   carta7,
  // ];

var cards = document.querySelectorAll(".frente"); 
  $.each(cards, function (index, value) {
    console.log(cards[index]);
    console.log(index + " : " + value[index]);
  });

  carta0.click(function () {
    console.log("clicou");
    verso0.toggle();
  });
  carta1.click(function () {
    console.log("clicou");
    verso1.toggle();
  });
});
