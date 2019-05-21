// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery/jquery-3.1.1.min.js
//= require bootstrap-sprockets
//= require metisMenu/jquery.metisMenu.js
//= require pace/pace.min.js
//= require slimscroll/jquery.slimscroll.min.js
//= require dropzone/dropzone.js
//= require_tree .

$(document).ready(function () {

    // icone de envio de docs
    $('.spin-icon').click(function (){
      $(".theme-config-box").toggleClass("show");
    });

    // icone de feed de demandas
    $('#openDemandsFeed').click(function (){

      var feed = document.getElementById('feedDemandas');
      var bodycontent = document.getElementById('bodycontent');

      if ( feed.classList.contains('showFeedDemands') ){
        // esconde feed
        feed.classList.remove('col-md-2');
        feed.classList.remove('showFeedDemands');

        feed.classList.add('hideDemands');

        // aumenta bodycontent
        bodycontent.classList.remove('col-md-10');
        bodycontent.classList.add('col-md-12');
      } else {
        // mostra feed
        feed.classList.remove('hideDemands');
        feed.classList.add('showFeedDemands');
        feed.classList.add('col-md-2');

        // ajusta bodycontent
        bodycontent.classList.remove('col-md-12');
        bodycontent.classList.add('col-md-10');
      }

      // $("#mySidenav").toggleClass("hideDemands");
    });
});