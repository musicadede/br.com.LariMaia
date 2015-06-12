/**
 * 
 */

$(function(){
    $("tr").hover(
        function(){$(this).addClass("linhaHover");},
        function(){$(this).removeClass("linhaHover");}
    );
 
    $("tr").click(function(){
        $("tr").removeClass("linhaSelecionada");
        $(this).addClass("linhaSelecionada");
    });
});