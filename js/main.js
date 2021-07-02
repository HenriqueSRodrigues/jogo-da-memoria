$(document).ready(function () {
  $("#iniciar").attr("disabled", true);
  $("#salvar").click(function () {
    if ($("#jogador").val() !== "") {
        $("#iniciar").attr("disabled", false);
    }
  });
  function jogo() {
    $("#iniciar").click(function () {});
    var conta = 1;
    var posicao = {
      cartas: [
        "/img/angularjs.png",
        "/img/angularjs.png",
        "/img/css3.png",
        "/img/css3.png",
        "/img/html5.png",
        "/img/html5.png",
        "/img/nodejs.png",
        "/img/nodejs.png",
      ],
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
          $(this).attr("src", posicao.cartas[index]);
        });
        $(".frente").each(function (index) {
          $(this).attr("src", posicao.cartas[index]);
        });
        posicao.clickManipuladores();
      },
      clickManipuladores: function () {
        $(".carta").click(function () {
          $(this).addClass("selecionado");
          $(this).find(".verso").hide();
          posicao.verificaPar();
        });
      },
      verificaPar: function () {
        if ($(".selecionado").length === 2) {
          if (
            $(".selecionado").first().attr("src") ==
            $(".selecionado").last().attr("src")
          ) {
            $(".selecionado").each(function () {
              $(this)
                .animate({ opacity: 0 })
                .removeClass("pares")
                .addClass("checado");
            });
            $(".selecionado").each(function () {
              $(this).removeClass("selecionado");
            });
          } else {
            $("#contaClick").text(conta++);
            console.log($("#contaClick"));
            setTimeout(function () {
              $(".selecionado").each(function () {
                $(this).removeClass("selecionado");
                $(this).find(".verso").show();
              });
            }, 500);
          }
        }
        posicao.checarVitoria();
      },
      checarVitoria: function () {
        if ($(".pares").length === 0) {
          setTimeout(() => {
            alert("Você Ganhou!! "+$("#jogador").val()+" e teve "+$("#contaClick").text()+" clicks errados");
          }, 500);
        }
      },
    };
    posicao.inicia();
  }
  $("#iniciar").click(function () {
      console.log($("#jogador").val());
    jogo();
    $("#contaClick").text((conta = 0));
    console.log($("#contaClick"));
    $(".carta").each(function () {
      $(this).find(".verso").hide();
    });
    setTimeout(function () {
      $(".carta").each(function () {
        $(this).find(".verso").show();
      });
    }, 1000);
  });
});