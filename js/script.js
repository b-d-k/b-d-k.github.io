(function(){
  
  'use strict';


  window.onload = init;


  function init(){
    alternateBG('proj-row', '#f2f2f2');
  }


  // -- Set BG color on every 2nd element found --
  function alternateBG(el, bgColor){

    var elems = document.getElementsByClassName(el);

    for (var i=elems.length - 1; i >= 0; i--) {
      if( i%2!==0){
        elems[i].style.backgroundColor = bgColor;
      }
    };


  }

})();