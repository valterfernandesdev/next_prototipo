$(document).ready(function () {

    // checa resolucao
    if (screen.width <= 1024){
      // esconde icone de envio de docs para desktop e add icone no topbar para mobile
      var doc_mobile = document.getElementById("list_item_doc_mobile");
      var doc_desktop = document.getElementById("docsendabsolute");
      doc_mobile.style.display = '';
      doc_desktop.style.display = 'none';


      // remove classe que so funciona no desktop
      var mainplusbreadcrumb = document.getElementById("mainplusbreadcrumb");
      mainplusbreadcrumb.classList.remove('mainplusbreadcrumb');
    }else{

          // icone de envio de docs
          $('.spin-icon').click(function (){
            $(".theme-config-box").toggleClass("show");
          });

          // icone de feed de demandas
          $('#openDemandsFeed').click(function (){

            var feed = document.getElementById('right-sidebar');
            // var tabsoptsdemands = document.getElementById('tabsoptsdemands');
            var bodycontent = document.getElementById('mainplusbreadcrumb');
            // var iconfeedchevron = document.getElementById('icon_demand_open_close');
            // var iconfeed = document.getElementById('openDemandsFeed');
            var docsendabsolute = document.getElementById('docsendabsolute');


            // checa se feed de demanas está aberto
            if ( feed.classList.contains('showFeedDemands') ){
              // esconde feed
              feed.classList.remove('showFeedDemands');
              feed.classList.add('hideDemands');


              // aumenta bodycontent
              bodycontent.style.width = '86vw';

              //altera icon doc send
              docsendabsolute.style.right = '0';
            } else {
              // mostra feed
              feed.classList.remove('hideDemands');
              feed.classList.add('showFeedDemands');

              // ajusta bodycontent
              bodycontent.style.width = '67.6vw';

              //altera icon doc send
              docsendabsolute.style.right = '16.9vw';
            }
          });

          // se left navbar click, ajusta bodycontent
          $('.navbar-minimalize').click(function (){
            var bodycontent = document.getElementById('mainplusbreadcrumb');
            var feed = document.getElementById('right-sidebar');

            //ajusta bodycontent largura
            // ao checar o click, a classe já existe entre o click e a checagem
            if ( !document.body.classList.contains('mini-navbar') ){
                bodycontent.style.width = '77.3vw';
                if ( feed.classList.contains('showFeedDemands') ){
                  bodycontent.style.width = '67.6vw';
                }else{
                  bodycontent.style.width = '84.5vw';
                }
            }  else {
                bodycontent.style.width = '77.3vw';
                if ( feed.classList.contains('hideDemands') ){
                  bodycontent.style.width = '94.3vw';
                }
            }
          });
      }
});
