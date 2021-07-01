$(document).ready(function () {
  var posicao = {
    cartas: [1, 1, 2, 2, 3, 3, 4, 4],
    inicia: function () {
      posicao.embaralha();
    },
    embaralha: function () {
      var aleatorio = 0;
      var resultado = 0;
      for (i = 1; i < posicao.cartas.length; i++) {
        aleatorio = Math.round(Math.random() * i);
        resultado = posicao.cartas[i];
        posicao.cartas[i] = posicao.cartas[aleatorio];
        posicao.cartas[aleatorio] = resultado;
      }
      posicao.atribuirCartas();
      console.log("Array cartas embaralhadas: " + posicao.cartas);
    },
    atribuirCartas: function () {
      $(".carta").each(function (index) {
        $(this).attr("data-carta-value", posicao.cartas[index]);
        console.log();
      });
      posicao.clickManipuladores();
    },
    clickManipuladores: function () {
      $(".carta").click(function () {
        $(this)
          .html("<p>" + $(this).data("cartaValue") + "</p>")
          .addClass("selecionado");
        posicao.verificaPar();
      });
    },
    verificaPar: function () {
      if ($(".selecionado").length === 2) {
        if (
          $(".selecionado").first().data("cartaValue") ==
          $(".selecionado").last().data("cartaValue")
        ) {
          $(".selecionado").each(function () {
            $(this).animate({ opacity: 0 }).removeClass("pares");
          });
          $(".selecionado").each(function () {
            $(this).removeClass("selecionado");
          });
        } else {
          setTimeout(function () {
            $(".selecionado").each(function () {
              $(this).html("").removeClass("selecionado");
            });
          }, 300);
        }
      }
      posicao.checarVitoria()
    },
    checarVitoria: function () {
      if ($(".pares").length === 0) {
        setTimeout(() => {
                  alert("Você Ganhou!!");
        }, 300);
      }
    },
  };

  posicao.inicia();
});
